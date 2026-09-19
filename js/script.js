/**
 * Real Estate Property Portal - Core JavaScript Logic
 * Author: Aditi Gupta
 */

// ============================================================
// 1. Favorites State Management (localStorage)
// ============================================================
const FAVORITES_KEY = 'estatehub_favorites';

function getFavorites() {
  try {
    const saved = localStorage.getItem(FAVORITES_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error('Error reading favorites from localStorage', e);
    return [];
  }
}

function isFavorite(propertyId) {
  const favs = getFavorites();
  return favs.includes(Number(propertyId));
}

function toggleFavorite(propertyId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  
  const id = Number(propertyId);
  let favs = getFavorites();
  const index = favs.indexOf(id);
  let added = false;

  if (index > -1) {
    favs.splice(index, 1);
    added = false;
  } else {
    favs.push(id);
    added = true;
  }

  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
  } catch (e) {
    console.error('Error saving favorites to localStorage', e);
  }

  // Update UI icons across page
  const buttons = document.querySelectorAll(`[data-fav-id="${id}"]`);
  buttons.forEach(btn => {
    if (added) {
      btn.classList.add('active');
      btn.innerHTML = '<i class="bi bi-heart-fill text-danger"></i>';
      btn.setAttribute('title', 'Remove from Favorites');
    } else {
      btn.classList.remove('active');
      btn.innerHTML = '<i class="bi bi-heart"></i>';
      btn.setAttribute('title', 'Add to Favorites');
    }
  });

  updateFavoritesBadge();

  // Show Toast
  const property = typeof propertiesData !== 'undefined' ? propertiesData.find(p => p.id === id) : null;
  const title = property ? property.title : 'Property';
  if (added) {
    showToast(`<strong>${title}</strong> added to your favorites!`, 'success');
  } else {
    showToast(`<strong>${title}</strong> removed from favorites.`, 'info');
  }

  // If currently on favorites page, re-render list
  if (window.location.pathname.includes('favorites.html')) {
    renderFavoritesPage();
  }
}

function clearAllFavorites() {
  if (confirm('Are you sure you want to remove all saved favorite properties?')) {
    localStorage.removeItem(FAVORITES_KEY);
    updateFavoritesBadge();
    showToast('All saved properties have been cleared.', 'info');
    if (window.location.pathname.includes('favorites.html')) {
      renderFavoritesPage();
    }
  }
}

function updateFavoritesBadge() {
  const favs = getFavorites();
  const badges = document.querySelectorAll('.favorites-badge-count');
  badges.forEach(b => {
    b.textContent = favs.length;
  });
}

// ============================================================
// 2. Custom Interactive Toast Notifications
// ============================================================
function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'custom-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-box';

  let iconHtml = '<i class="bi bi-check-circle-fill text-success fs-4"></i>';
  let borderColor = '#0d9488';

  if (type === 'info') {
    iconHtml = '<i class="bi bi-info-circle-fill text-primary fs-4"></i>';
    borderColor = '#0284c7';
  } else if (type === 'danger' || type === 'error') {
    iconHtml = '<i class="bi bi-exclamation-circle-fill text-danger fs-4"></i>';
    borderColor = '#ef4444';
  }

  toast.style.borderLeftColor = borderColor;
  toast.innerHTML = `
    ${iconHtml}
    <div class="flex-grow-1 text-dark" style="font-size: 0.92rem;">${message}</div>
    <button type="button" class="btn-close ms-2" style="font-size: 0.75rem;" aria-label="Close"></button>
  `;

  const closeBtn = toast.querySelector('.btn-close');
  closeBtn.addEventListener('click', () => {
    toast.remove();
  });

  container.appendChild(toast);

  // Auto remove after 3.5 seconds
  setTimeout(() => {
    if (toast.parentElement) {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }
  }, 3500);
}

// ============================================================
// 3. Property Card HTML Generator
// ============================================================
function createPropertyCardHtml(property, isListView = false) {
  const isFav = isFavorite(property.id);
  const statusClass = property.status === 'For Rent' ? 'badge-rent' : 'badge-sale';

  if (isListView) {
    return `
      <div class="col-12">
        <div class="property-card property-card-list">
          <div class="card-img-wrapper position-relative">
            <img src="${property.images[0]}" alt="${property.title}" loading="lazy">
            <div class="card-badges">
              <span class="card-badge ${statusClass}">${property.status}</span>
              <span class="card-badge badge-type">${property.propertyType}</span>
              ${property.featured ? '<span class="card-badge badge-featured"><i class="bi bi-star-fill me-1"></i>Featured</span>' : ''}
            </div>
            <button class="favorite-btn ${isFav ? 'active' : ''}" 
                    data-fav-id="${property.id}" 
                    onclick="toggleFavorite(${property.id}, event)"
                    title="${isFav ? 'Remove from Favorites' : 'Add to Favorites'}">
              <i class="bi ${isFav ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i>
            </button>
          </div>
          <div class="card-body-content">
            <div class="card-price-row">
              <div class="card-price">${property.priceFormatted}<small>${property.pricePeriod}</small></div>
              <span class="badge bg-light text-dark border"><i class="bi bi-geo-alt me-1 text-accent"></i>${property.city}</span>
            </div>
            <h5 class="card-prop-title">
              <a href="property-details.html?id=${property.id}">${property.title}</a>
            </h5>
            <p class="card-location text-truncate">
              <i class="bi bi-pin-map text-accent"></i> ${property.address}
            </p>
            <p class="text-muted small mb-3" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
              ${property.description}
            </p>
            <div class="card-specs-row">
              <div class="spec-item"><i class="bi bi-door-closed"></i> <span>${property.bedrooms} Beds</span></div>
              <div class="spec-item"><i class="bi bi-droplet"></i> <span>${property.bathrooms} Baths</span></div>
              <div class="spec-item"><i class="bi bi-aspect-ratio"></i> <span>${property.areaSqft.toLocaleString()} Sq Ft</span></div>
            </div>
            <div class="card-footer-action">
              <button class="btn btn-sm btn-outline-secondary" onclick="openQuickViewModal(${property.id})">
                <i class="bi bi-eye"></i> Quick View
              </button>
              <a href="property-details.html?id=${property.id}" class="btn btn-sm btn-primary">
                View Details <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="property-card">
        <div class="card-img-wrapper position-relative">
          <img src="${property.images[0]}" alt="${property.title}" loading="lazy">
          <div class="card-badges">
            <span class="card-badge ${statusClass}">${property.status}</span>
            <span class="card-badge badge-type">${property.propertyType}</span>
            ${property.featured ? '<span class="card-badge badge-featured"><i class="bi bi-star-fill me-1"></i>Featured</span>' : ''}
          </div>
          <button class="favorite-btn ${isFav ? 'active' : ''}" 
                  data-fav-id="${property.id}" 
                  onclick="toggleFavorite(${property.id}, event)"
                  title="${isFav ? 'Remove from Favorites' : 'Add to Favorites'}">
            <i class="bi ${isFav ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i>
          </button>
        </div>
        <div class="card-body-content">
          <div class="card-price-row">
            <div class="card-price">${property.priceFormatted}<small>${property.pricePeriod}</small></div>
            <span class="badge bg-light text-dark border">${property.city}</span>
          </div>
          <h5 class="card-prop-title">
            <a href="property-details.html?id=${property.id}" title="${property.title}">${property.title}</a>
          </h5>
          <p class="card-location text-truncate">
            <i class="bi bi-geo-alt text-accent"></i> ${property.location}
          </p>
          <div class="card-specs-row">
            <div class="spec-item"><i class="bi bi-door-closed"></i> <span>${property.bedrooms} Beds</span></div>
            <div class="spec-item"><i class="bi bi-droplet"></i> <span>${property.bathrooms} Baths</span></div>
            <div class="spec-item"><i class="bi bi-aspect-ratio"></i> <span>${property.areaSqft.toLocaleString()} sqft</span></div>
          </div>
          <div class="card-footer-action">
            <button class="btn btn-sm btn-outline-secondary" onclick="openQuickViewModal(${property.id})">
              <i class="bi bi-eye"></i> Quick View
            </button>
            <a href="property-details.html?id=${property.id}" class="btn btn-sm btn-primary">
              Details <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// 4. Quick View Modal Handler
// ============================================================
function openQuickViewModal(propertyId) {
  const property = propertiesData.find(p => p.id === Number(propertyId));
  if (!property) return;

  let modalEl = document.getElementById('quickViewModal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'quickViewModal';
    modalEl.className = 'modal fade';
    modalEl.tabIndex = -1;
    document.body.appendChild(modalEl);
  }

  const isFav = isFavorite(property.id);

  modalEl.innerHTML = `
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
        <div class="modal-header border-0 pb-0">
          <h5 class="modal-title fw-bold">${property.title}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-4">
          <div class="row g-4">
            <div class="col-md-6">
              <img src="${property.images[0]}" class="rounded-3 w-100 shadow-sm" style="height: 270px; object-fit: cover;" alt="${property.title}">
              <div class="d-flex gap-2 mt-2">
                ${property.images.slice(1, 4).map(img => `
                  <img src="${img}" class="rounded-2" style="width: 31%; height: 65px; object-fit: cover;" alt="thumbnail">
                `).join('')}
              </div>
            </div>
            <div class="col-md-6 d-flex flex-column justify-content-between">
              <div>
                <div class="d-flex align-items-center gap-2 mb-2">
                  <span class="badge ${property.status === 'For Rent' ? 'badge-rent' : 'badge-sale'}">${property.status}</span>
                  <span class="badge bg-secondary">${property.propertyType}</span>
                  <span class="badge bg-light text-dark border"><i class="bi bi-geo-alt me-1"></i>${property.city}</span>
                </div>
                <h3 class="fw-bold text-accent mb-2">${property.priceFormatted}<small class="text-muted fs-6">${property.pricePeriod}</small></h3>
                <p class="text-muted small mb-3"><i class="bi bi-pin-map me-1"></i>${property.address}</p>
                <div class="p-3 bg-light rounded-3 mb-3">
                  <div class="row text-center">
                    <div class="col-4 border-end">
                      <div class="fw-bold text-dark">${property.bedrooms}</div>
                      <div class="text-muted small">Bedrooms</div>
                    </div>
                    <div class="col-4 border-end">
                      <div class="fw-bold text-dark">${property.bathrooms}</div>
                      <div class="text-muted small">Bathrooms</div>
                    </div>
                    <div class="col-4">
                      <div class="fw-bold text-dark">${property.areaSqft.toLocaleString()}</div>
                      <div class="text-muted small">Sq Ft</div>
                    </div>
                  </div>
                </div>
                <p class="small text-secondary mb-3">${property.tagline}</p>
              </div>
              <div class="d-flex gap-2 pt-3 border-top">
                <button class="btn btn-outline-danger ${isFav ? 'active' : ''}" onclick="toggleFavorite(${property.id}, event)">
                  <i class="bi ${isFav ? 'bi-heart-fill' : 'bi-heart'} me-1"></i> ${isFav ? 'Saved' : 'Favorite'}
                </button>
                <a href="property-details.html?id=${property.id}" class="btn btn-primary flex-grow-1">
                  Full Property Details <i class="bi bi-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const bsModal = new bootstrap.Modal(modalEl);
  bsModal.show();
}

// ============================================================
// 5. Home Page Features & Showcase Rendering
// ============================================================
function initHomePage() {
  // Render Featured Properties
  const featuredContainer = document.getElementById('featuredPropertiesGrid');
  if (featuredContainer && typeof propertiesData !== 'undefined') {
    const featuredItems = propertiesData.filter(p => p.featured).slice(0, 6);
    featuredContainer.innerHTML = featuredItems.map(p => createPropertyCardHtml(p, false)).join('');
  }

  // Render Popular Locations
  const locationsContainer = document.getElementById('popularLocationsGrid');
  if (locationsContainer && typeof popularLocations !== 'undefined') {
    locationsContainer.innerHTML = popularLocations.map(loc => `
      <div class="col-lg-4 col-md-6 mb-4">
        <a href="properties.html?city=${encodeURIComponent(loc.city)}" class="location-card">
          <img src="${loc.image}" alt="${loc.city}" loading="lazy">
          <div class="location-overlay">
            <h4 class="location-name">${loc.city}, ${loc.country}</h4>
            <div class="location-count">
              <i class="bi bi-building me-1"></i> ${loc.propertiesCount} Properties Available
            </div>
            <div class="small text-white-50 mt-1">${loc.popularFor}</div>
          </div>
        </a>
      </div>
    `).join('');
  }

  // Hero Quick Search Form Handler
  const heroSearchForm = document.getElementById('heroSearchForm');
  if (heroSearchForm) {
    let currentStatus = 'all';
    const statusTabs = document.querySelectorAll('.search-tab-btn');
    statusTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        statusTabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        currentStatus = e.target.getAttribute('data-status') || 'all';
      });
    });

    heroSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const keyword = document.getElementById('heroKeyword') ? document.getElementById('heroKeyword').value.trim() : '';
      const type = document.getElementById('heroType') ? document.getElementById('heroType').value : '';
      const maxPrice = document.getElementById('heroPrice') ? document.getElementById('heroPrice').value : '';

      const queryParams = new URLSearchParams();
      if (keyword) queryParams.set('search', keyword);
      if (type && type !== 'all') queryParams.set('type', type);
      if (currentStatus && currentStatus !== 'all') queryParams.set('status', currentStatus);
      if (maxPrice && maxPrice !== 'all') queryParams.set('price', maxPrice);

      window.location.href = `properties.html?${queryParams.toString()}`;
    });
  }
}

// ============================================================
// 6. Properties Page Filter & Search Engine
// ============================================================
let currentListingView = 'grid'; // 'grid' or 'list'

function initPropertiesPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchInput = document.getElementById('filterKeyword');
  const typeSelect = document.getElementById('filterType');
  const statusSelect = document.getElementById('filterStatus');
  const priceSlider = document.getElementById('filterPriceSlider');
  const priceLabel = document.getElementById('filterPriceValue');
  const bedroomsSelect = document.getElementById('filterBedrooms');
  const sortSelect = document.getElementById('sortBySelect');
  const resetBtn = document.getElementById('resetFiltersBtn');
  const gridViewBtn = document.getElementById('viewGridBtn');
  const listViewBtn = document.getElementById('viewListBtn');

  // Populate form from URL if provided
  if (urlParams.has('search') && searchInput) {
    searchInput.value = urlParams.get('search');
  }
  if (urlParams.has('city') && searchInput) {
    searchInput.value = urlParams.get('city');
  }
  if (urlParams.has('type') && typeSelect) {
    typeSelect.value = urlParams.get('type');
  }
  if (urlParams.has('status') && statusSelect) {
    statusSelect.value = urlParams.get('status');
  }
  if (urlParams.has('price') && priceSlider) {
    priceSlider.value = urlParams.get('price');
    if (priceLabel) priceLabel.textContent = `$${Number(urlParams.get('price')).toLocaleString()}`;
  }

  // Price slider live change
  if (priceSlider && priceLabel) {
    priceSlider.addEventListener('input', () => {
      const val = Number(priceSlider.value);
      if (val >= 5000000) {
        priceLabel.textContent = 'Any Price ($5M+)';
      } else {
        priceLabel.textContent = `$${val.toLocaleString()}`;
      }
      applyPropertyFilters();
    });
  }

  // Listeners
  if (searchInput) searchInput.addEventListener('input', debounce(applyPropertyFilters, 250));
  if (typeSelect) typeSelect.addEventListener('change', applyPropertyFilters);
  if (statusSelect) statusSelect.addEventListener('change', applyPropertyFilters);
  if (bedroomsSelect) bedroomsSelect.addEventListener('change', applyPropertyFilters);
  if (sortSelect) sortSelect.addEventListener('change', applyPropertyFilters);

  // Amenity Checkboxes
  const amenityCheckboxes = document.querySelectorAll('.filter-amenity-checkbox');
  amenityCheckboxes.forEach(cb => cb.addEventListener('change', applyPropertyFilters));

  // Reset Button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (typeSelect) typeSelect.value = 'all';
      if (statusSelect) statusSelect.value = 'all';
      if (bedroomsSelect) bedroomsSelect.value = 'all';
      if (priceSlider) {
        priceSlider.value = 5000000;
        if (priceLabel) priceLabel.textContent = 'Any Price ($5M+)';
      }
      if (sortSelect) sortSelect.value = 'featured';
      amenityCheckboxes.forEach(cb => cb.checked = false);
      applyPropertyFilters();
    });
  }

  // View switchers
  if (gridViewBtn) {
    gridViewBtn.addEventListener('click', () => {
      currentListingView = 'grid';
      gridViewBtn.classList.add('active');
      if (listViewBtn) listViewBtn.classList.remove('active');
      applyPropertyFilters();
    });
  }

  if (listViewBtn) {
    listViewBtn.addEventListener('click', () => {
      currentListingView = 'list';
      listViewBtn.classList.add('active');
      if (gridViewBtn) gridViewBtn.classList.remove('active');
      applyPropertyFilters();
    });
  }

  // Initial Filter Run
  applyPropertyFilters();
}

function applyPropertyFilters() {
  const container = document.getElementById('propertiesListContainer');
  const countBadge = document.getElementById('propertiesCountText');
  if (!container || typeof propertiesData === 'undefined') return;

  const keyword = (document.getElementById('filterKeyword')?.value || '').toLowerCase().trim();
  const type = document.getElementById('filterType')?.value || 'all';
  const status = document.getElementById('filterStatus')?.value || 'all';
  const bedrooms = document.getElementById('filterBedrooms')?.value || 'all';
  const maxPrice = Number(document.getElementById('filterPriceSlider')?.value || 5000000);
  const sortBy = document.getElementById('sortBySelect')?.value || 'featured';

  // Selected Amenities
  const selectedAmenities = Array.from(document.querySelectorAll('.filter-amenity-checkbox:checked')).map(cb => cb.value.toLowerCase());

  let results = propertiesData.filter(p => {
    // Keyword match across title, address, city, and description
    if (keyword) {
      const matchTitle = p.title.toLowerCase().includes(keyword);
      const matchCity = p.city.toLowerCase().includes(keyword);
      const matchLoc = p.location.toLowerCase().includes(keyword);
      const matchAddress = p.address.toLowerCase().includes(keyword);
      if (!matchTitle && !matchCity && !matchLoc && !matchAddress) return false;
    }

    // Property Type
    if (type !== 'all' && p.propertyType.toLowerCase() !== type.toLowerCase()) {
      return false;
    }

    // Status (For Sale / For Rent)
    if (status !== 'all' && p.status.toLowerCase().replace(' ', '') !== status.toLowerCase().replace(' ', '')) {
      return false;
    }

    // Bedrooms
    if (bedrooms !== 'all') {
      const minBeds = Number(bedrooms);
      if (p.bedrooms < minBeds) return false;
    }

    // Max Price (if slider < 5000000)
    if (maxPrice < 5000000) {
      if (p.price > maxPrice) return false;
    }

    // Amenities
    if (selectedAmenities.length > 0) {
      const propAmenitiesLower = p.features.map(f => f.toLowerCase());
      const hasAllAmenities = selectedAmenities.every(a => 
        propAmenitiesLower.some(feature => feature.includes(a))
      );
      if (!hasAllAmenities) return false;
    }

    return true;
  });

  // Sorting
  if (sortBy === 'price-low') {
    results.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    results.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'area') {
    results.sort((a, b) => b.areaSqft - a.areaSqft);
  } else if (sortBy === 'newest') {
    results.sort((a, b) => b.yearBuilt - a.yearBuilt);
  } else {
    // Default: featured first, then id
    results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  // Update Result Count
  if (countBadge) {
    countBadge.textContent = `Showing ${results.length} of ${propertiesData.length} properties`;
  }

  // Render
  if (results.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <div class="empty-state-box">
          <div class="empty-state-icon"><i class="bi bi-search"></i></div>
          <h4 class="fw-bold mb-2">No Matching Properties Found</h4>
          <p class="text-muted mb-4">We couldn't find any property matching your current search and filter criteria. Try adjusting your filters or search keywords.</p>
          <button class="btn btn-primary" onclick="document.getElementById('resetFiltersBtn')?.click()">
            <i class="bi bi-arrow-counterclockwise me-1"></i> Reset All Filters
          </button>
        </div>
      </div>
    `;
    return;
  }

  const isList = currentListingView === 'list';
  container.innerHTML = results.map(p => createPropertyCardHtml(p, isList)).join('');
}

// Simple debounce helper
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// ============================================================
// 7. Property Details Page Dynamic Population
// ============================================================
function initPropertyDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const propId = Number(urlParams.get('id')) || 1;
  const property = propertiesData.find(p => p.id === propId) || propertiesData[0];

  if (!property) return;

  // Title and Breadcrumbs
  document.title = `${property.title} | Luxury Real Estate Portal`;
  const breadcrumbEl = document.getElementById('detailBreadcrumbTitle');
  if (breadcrumbEl) breadcrumbEl.textContent = property.title;

  const headerTitle = document.getElementById('detailTitle');
  if (headerTitle) headerTitle.textContent = property.title;

  const headerLocation = document.getElementById('detailAddress');
  if (headerLocation) headerLocation.innerHTML = `<i class="bi bi-pin-map text-accent me-1"></i> ${property.address}`;

  const headerPrice = document.getElementById('detailPrice');
  if (headerPrice) headerPrice.innerHTML = `${property.priceFormatted}<span class="fs-6 fw-normal text-muted">${property.pricePeriod}</span>`;

  // Status and Type Badges
  const badgeContainer = document.getElementById('detailBadges');
  if (badgeContainer) {
    badgeContainer.innerHTML = `
      <span class="badge ${property.status === 'For Rent' ? 'badge-rent' : 'badge-sale'} me-1">${property.status}</span>
      <span class="badge bg-secondary me-1">${property.propertyType}</span>
      ${property.featured ? '<span class="badge badge-featured"><i class="bi bi-star-fill me-1"></i>Featured</span>' : ''}
    `;
  }

  // Favorite button in details header
  const favBtn = document.getElementById('detailFavBtn');
  if (favBtn) {
    const isFav = isFavorite(property.id);
    favBtn.setAttribute('data-fav-id', property.id);
    favBtn.className = `btn btn-outline-danger ${isFav ? 'active' : ''}`;
    favBtn.innerHTML = `<i class="bi ${isFav ? 'bi-heart-fill' : 'bi-heart'} me-1"></i> ${isFav ? 'Saved in Favorites' : 'Save to Favorites'}`;
    favBtn.onclick = (e) => {
      toggleFavorite(property.id, e);
      const currentlyFav = isFavorite(property.id);
      favBtn.className = `btn btn-outline-danger ${currentlyFav ? 'active' : ''}`;
      favBtn.innerHTML = `<i class="bi ${currentlyFav ? 'bi-heart-fill' : 'bi-heart'} me-1"></i> ${currentlyFav ? 'Saved in Favorites' : 'Save to Favorites'}`;
    };
  }

  // Image Showcase & Thumbnails
  const mainImage = document.getElementById('detailMainImage');
  const thumbContainer = document.getElementById('detailThumbnails');
  if (mainImage && property.images.length > 0) {
    mainImage.src = property.images[0];
    mainImage.alt = property.title;
  }

  if (thumbContainer && property.images.length > 0) {
    thumbContainer.innerHTML = property.images.map((img, index) => `
      <img src="${img}" class="thumb-img ${index === 0 ? 'active' : ''}" alt="thumbnail ${index + 1}" onclick="switchDetailImage(this, '${img}')">
    `).join('');
  }

  // Specs Overview
  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  setEl('specBeds', property.bedrooms);
  setEl('specBaths', property.bathrooms);
  setEl('specArea', `${property.areaSqft.toLocaleString()} Sq Ft`);
  setEl('specYear', property.yearBuilt);
  setEl('specGarage', `${property.garage} Cars`);
  setEl('specType', property.propertyType);

  // Description
  const descEl = document.getElementById('detailDescription');
  if (descEl) descEl.textContent = property.description;

  // Features & Amenities List
  const featuresContainer = document.getElementById('detailFeaturesList');
  if (featuresContainer && property.features) {
    featuresContainer.innerHTML = property.features.map(f => `
      <div class="col-md-6 mb-2">
        <div class="d-flex align-items-center">
          <i class="bi bi-check-circle-fill text-accent me-2 fs-5"></i>
          <span class="fw-semibold text-dark">${f}</span>
        </div>
      </div>
    `).join('');
  }

  // Agent Card
  if (property.agent) {
    const agentAvatar = document.getElementById('detailAgentAvatar');
    const agentName = document.getElementById('detailAgentName');
    const agentTitle = document.getElementById('detailAgentTitle');
    const agentPhone = document.getElementById('detailAgentPhone');
    const agentEmail = document.getElementById('detailAgentEmail');

    if (agentAvatar) agentAvatar.src = property.agent.image;
    if (agentName) agentName.textContent = property.agent.name;
    if (agentTitle) agentTitle.textContent = property.agent.title;
    if (agentPhone) {
      agentPhone.textContent = property.agent.phone;
      agentPhone.href = `tel:${property.agent.phone.replace(/[^0-9+]/g, '')}`;
    }
    if (agentEmail) {
      agentEmail.textContent = property.agent.email;
      agentEmail.href = `mailto:${property.agent.email}`;
    }
  }

  // Pre-fill property title in the inquiry form
  const inquirySubject = document.getElementById('inquirySubject');
  if (inquirySubject) {
    inquirySubject.value = `Inquiry regarding: ${property.title} (ID #${property.id})`;
  }

  // Mortgage Calculator setup
  initMortgageCalculator(property.price);

  // Render Related / Similar Properties
  const relatedContainer = document.getElementById('relatedPropertiesGrid');
  if (relatedContainer) {
    const related = propertiesData.filter(p => p.id !== property.id && (p.propertyType === property.propertyType || p.city === property.city)).slice(0, 3);
    relatedContainer.innerHTML = related.map(p => createPropertyCardHtml(p, false)).join('');
  }
}

// Switch Detail Image
function switchDetailImage(thumbElement, newSrc) {
  const mainImage = document.getElementById('detailMainImage');
  if (mainImage) {
    mainImage.style.opacity = '0.5';
    mainImage.src = newSrc;
    setTimeout(() => mainImage.style.opacity = '1', 150);
  }
  document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
  thumbElement.classList.add('active');
}

// ============================================================
// 8. Interactive Mortgage Calculator
// ============================================================
function initMortgageCalculator(initialPrice) {
  const priceInput = document.getElementById('mortgageHomePrice');
  const downPaymentInput = document.getElementById('mortgageDownPayment');
  const interestInput = document.getElementById('mortgageInterest');
  const termSelect = document.getElementById('mortgageTerm');
  const calcBtn = document.getElementById('mortgageCalcBtn');
  const monthlyPaymentDisplay = document.getElementById('mortgageMonthlyPayment');
  const loanPrincipalDisplay = document.getElementById('mortgagePrincipalDisplay');

  if (priceInput && initialPrice) {
    priceInput.value = initialPrice;
    if (downPaymentInput) {
      downPaymentInput.value = Math.round(initialPrice * 0.2); // 20% default
    }
  }

  function calculateMortgage() {
    const price = Number(priceInput?.value || 0);
    const downPayment = Number(downPaymentInput?.value || 0);
    const annualInterestRate = Number(interestInput?.value || 6.5);
    const termYears = Number(termSelect?.value || 30);

    const principal = Math.max(0, price - downPayment);
    const monthlyRate = (annualInterestRate / 100) / 12;
    const totalPayments = termYears * 12;

    let monthlyPayment = 0;
    if (monthlyRate > 0 && totalPayments > 0 && principal > 0) {
      monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    }

    if (monthlyPaymentDisplay) {
      monthlyPaymentDisplay.textContent = `$${Math.round(monthlyPayment).toLocaleString()}/mo`;
    }
    if (loanPrincipalDisplay) {
      loanPrincipalDisplay.textContent = `$${principal.toLocaleString()}`;
    }
  }

  if (calcBtn) {
    calcBtn.addEventListener('click', calculateMortgage);
  }
  if (priceInput) priceInput.addEventListener('input', calculateMortgage);
  if (downPaymentInput) downPaymentInput.addEventListener('input', calculateMortgage);
  if (interestInput) interestInput.addEventListener('input', calculateMortgage);
  if (termSelect) termSelect.addEventListener('change', calculateMortgage);

  // Initial calculation
  calculateMortgage();
}

// ============================================================
// 9. Favorites Page Management
// ============================================================
function renderFavoritesPage() {
  const container = document.getElementById('favoritesGrid');
  const countBadge = document.getElementById('favCountHeader');
  if (!container || typeof propertiesData === 'undefined') return;

  const favIds = getFavorites();
  const savedProperties = propertiesData.filter(p => favIds.includes(p.id));

  if (countBadge) {
    countBadge.textContent = `${savedProperties.length} ${savedProperties.length === 1 ? 'Property' : 'Properties'} Saved`;
  }

  if (savedProperties.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <div class="empty-state-box my-5">
          <div class="empty-state-icon">
            <i class="bi bi-heartbreak"></i>
          </div>
          <h3 class="fw-bold mb-2">No Saved Properties Yet</h3>
          <p class="text-muted mb-4" style="max-width: 500px; margin: 0 auto;">You haven't added any properties to your favorites yet. Click the heart icon on any property card while browsing to save them here for quick comparison.</p>
          <a href="properties.html" class="btn btn-primary px-4 py-2">
            <i class="bi bi-compass me-2"></i> Browse Properties Now
          </a>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = savedProperties.map(p => `
    <div class="col-lg-4 col-md-6 mb-4" id="fav-card-${p.id}">
      <div class="property-card">
        <div class="card-img-wrapper position-relative">
          <img src="${p.images[0]}" alt="${p.title}" loading="lazy">
          <div class="card-badges">
            <span class="card-badge ${p.status === 'For Rent' ? 'badge-rent' : 'badge-sale'}">${p.status}</span>
            <span class="card-badge badge-type">${p.propertyType}</span>
          </div>
          <button class="favorite-btn active" onclick="toggleFavorite(${p.id}, event)" title="Remove from Favorites">
            <i class="bi bi-heart-fill text-danger"></i>
          </button>
        </div>
        <div class="card-body-content">
          <div class="card-price-row">
            <div class="card-price">${p.priceFormatted}<small>${p.pricePeriod}</small></div>
            <span class="badge bg-light text-dark border">${p.city}</span>
          </div>
          <h5 class="card-prop-title">
            <a href="property-details.html?id=${p.id}">${p.title}</a>
          </h5>
          <p class="card-location text-truncate">
            <i class="bi bi-geo-alt text-accent"></i> ${p.location}
          </p>
          <div class="card-specs-row">
            <div class="spec-item"><i class="bi bi-door-closed"></i> <span>${p.bedrooms} Beds</span></div>
            <div class="spec-item"><i class="bi bi-droplet"></i> <span>${p.bathrooms} Baths</span></div>
            <div class="spec-item"><i class="bi bi-aspect-ratio"></i> <span>${p.areaSqft.toLocaleString()} sqft</span></div>
          </div>
          <div class="card-footer-action">
            <button class="btn btn-sm btn-outline-danger" onclick="toggleFavorite(${p.id}, event)">
              <i class="bi bi-trash3 me-1"></i> Remove
            </button>
            <a href="property-details.html?id=${p.id}" class="btn btn-sm btn-primary">
              View Details <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// 10. Form Validation & Submissions
// ============================================================
function initFormValidation() {
  const forms = document.querySelectorAll('.needs-validation');
  forms.forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        // Show success alert
        const formType = form.getAttribute('data-form-type') || 'inquiry';
        if (formType === 'contact') {
          showToast('Thank you! Your message has been sent successfully. Our advisor will reach out within 24 hours.', 'success');
        } else if (formType === 'tour') {
          showToast('Tour scheduled! You will receive an SMS and email confirmation shortly.', 'success');
        } else if (formType === 'newsletter') {
          showToast('Subscribed! You are now on our VIP property drops list.', 'success');
        } else {
          showToast('Inquiry submitted! An authorized agent will contact you shortly.', 'success');
        }
        form.reset();
        form.classList.remove('was-validated');
      }
      form.classList.add('was-validated');
    }, false);
  });
}

// ============================================================
// 11. Global Initialization
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Update badge counters everywhere
  updateFavoritesBadge();

  // Initialize page-specific scripts based on DOM presence
  if (document.getElementById('featuredPropertiesGrid')) {
    initHomePage();
  }

  if (document.getElementById('propertiesListContainer')) {
    initPropertiesPage();
  }

  if (document.getElementById('detailMainImage')) {
    initPropertyDetailsPage();
  }

  if (document.getElementById('favoritesGrid')) {
    renderFavoritesPage();
  }

  // Setup form validation
  initFormValidation();

  // Active navigation highlight
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Sticky navbar shadow on scroll
  const navbar = document.querySelector('.main-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('shadow-sm');
      } else {
        navbar.classList.remove('shadow-sm');
      }
    });
  }
});
