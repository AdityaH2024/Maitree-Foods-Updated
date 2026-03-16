/* ============================================================
   MAITREE FOODS — Customize Menu Page JavaScript
   File: customize.js
   100% Pure Vegetarian Catering, Pune
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     MENU DATA — matches menu.html exactly
  ---------------------------------------------------------- */
  var MENU_DATA = [
    {
      id: 'drinks',
      name: 'Welcome Drinks',
      items: [
        'Blue Lagoon', 'Fruit Punch', 'Rose & Litchi', 'Khus & Lemon',
        'Mojito', 'Kokam', 'Jaljeera', 'Blossoms', 'Iced Tea', 'Iced Coffee'
      ]
    },
    {
      id: 'Hot drinks',
      name: 'Hot Drinks',
      items: [
        'Tea', 'Coffee', 'Hot Milk/Bournvita'
      ]
    },
    {
      id: 'snacks',
      name: 'Starters',
      items: [
        'Small Batate Vada', 'Kanda Bhaji / Gol Bhaji', 'Kothimbir Vadi', 'Alu Vadi',
        'Suralichi Vadi / Khandvi', 'Paneer Pakoda', 'Veg Cutlets', 'Harabhara Kebab',
        'Onion Rings', 'Corn Cheese Balls', 'Corn Tikki', 'Spring Rolls',
        'Dal Vada', 'Crispy Corn', 'Veg Manchurian', 'Paneer Chilli',
        'Babycorn Mushroom Chilli', 'Dahi Vada', 'Patti Samosa', 'Bread Pizza'
      ]
    },
    {
      id: 'tandoori',
      name: 'Tandoori Starters',
      items: [
        'Paneer Tikka', 'Tandoori Aloo Gobhi', 'Veg Seekh Kebab', 'Paneer Achari Kebab',
        'Paneer Kasturi Kebab', 'Paneer Malai Kebab', 'Paneer Reshami Kebab', 'Paneer Achari',
        'Mushroom Tikka', 'Paneer Sholey Kebab', 'Paneer Banjara', 'Paneer Pahadi'
      ]
    },
    {
      id: 'paneer',
      name: 'Paneer Bhaji',
      items: [
        'Paneer Mutter', 'Paneer Tikka Lababdar', 'Paneer Tikka Masala', 'Paneer Kadhai',
        'Paneer Laee', 'Paneer Lasooni', 'Paneer Makhanwala', 'Paneer Butter Masala',
        'Paneer Angara', 'Palak Paneer', 'Paneer Mushroom Masala', 'Shahi Paneer',
        'Paneer Pasanda', 'Paneer Amritsari', 'Paneer Patiala', 'Paneer Lahori',
        'Tava Paneer', 'Paneer Kofta Curry', 'Paneer Tufani', 'Paneer Bhurji'
      ]
    },
    {
      id: 'vegetables',
      name: 'Veg Bhaji',
      items: [
        'Chole', 'Rajma', 'Yellow Batata', 'Baingan Masala', 'Mix Veg',
        'Veg Kadhai', 'Veg Tava', 'Veg Korma', 'Veg Chilli Milli', 'Veg Kolhapuri',
        'Veg Makhanwala', 'Veg Maratha', 'Veg Bhuna', 'Bhindi Fry',
        'Aloo Mutter', 'Veg Kofta Curry', 'Dum Aloo'
      ]
    },
    {
      id: 'special-veg',
      name: 'Special Veg Bhaji',
      items: [
        'Veg Diwani Handi', 'Veg Makhanwala', 'Veg Jalfrezi', 'Veg Aftabi',
        'Veg Banjara', 'Veg Patiala', 'Veg Jaipuri', 'Lasooni Methi / Palak',
        'Methi Malai Mutter', 'Bhindi Do Pyaza', 'Kaju Curry', 'Mushroom Mutter',
        'Babycorn Mushroom Kadhai', 'Malai Kofta', 'Alu Chi Bhaji'
      ]
    },
    {
      id: 'dal',
      name: 'Types of Dal',
      items: [
        'Dal Fry', 'Dal Tadka', 'Dal Makhani', 'Dal Bukhara', 'Dal Palak',
        'Dal Methi', 'Dal Khurchan', 'Dhaba Dal', 'Kadhi', 'Kadhi Pakoda'
      ]
    },
    {
      id: 'rice',
      name: 'Types of Rice',
      items: [
        'Steam Rice', 'Jeera Rice', 'Veg Pulao', 'Tava Pulao', 'Methi Pulao',
        'Kashmiri Pulao', 'Veg Biryani', 'Dal Khichadi', 'Palak Khichadi', 'Curd Rice'
      ]
    },
    {
      id: 'roti',
      name: 'Types of Roti',
      items: [
        'Chapati / Phulke', 'Puri', 'Paratha', 'Lachha Paratha', 'Masala Puri',
        'Tandoori Roti', 'Rumali Roti', 'Bhatura', 'Palak Puri', 'Methi Thepla'
      ]
    },
    {
      id: 'sweets',
      name: 'Sweets',
      items: [
        'Gulab Jamun', 'Rasgulla', 'Pineapple Sheera', 'Basundi', 'Sitafal Rabadi',
        'Angoori Rabadi', 'Moong Dal Halwa', 'Jalebi', 'Ice Cream', 'Kheer', 'Motichur Ladoo'
      ]
    },
    {
      id: 'salads',
      name: 'Salads',
      items: [
        'Green Salad', 'Sprouted Salad', 'Russian Salad', 'Tossed Salad', 'Tandoori Salad'
      ]
    },
    {
      id: 'raita',
      name: 'Raita',
      items: [
        'Veg Raita', 'Boondi Raita', 'Pineapple Raita', 'Burhani Raita', 'Palak Raita'
      ]
    },
    {
      id: 'papad',
      name: 'Papad',
      items: [
        'Samosa Papad', 'Udad Papad', 'Nachani Papad', 'Kurdai', 'Nachani / Rice Papad'
      ]
    },
    {
      id: 'chaat',
      name: 'Chaat',
      items: ['Pani Puri', 'SPDP', 'Bhel']
    },
    {
      id: 'breakfast',
      name: 'Breakfast Items',
      items: [
        'Idli Sambar', 'Poha', 'Upma / Masala Upma', 'Medu Vada Sambar',
        'Sabudana Khichadi', 'Misal Pav', 'Dosa', 'Uttapam', 'Pav Bhaji'
      ]
    }
  ];

  /* ----------------------------------------------------------
     DOM REFERENCES
  ---------------------------------------------------------- */
  var form            = document.getElementById('customizeForm');
  var container       = document.getElementById('categoriesContainer');
  var errorBanner     = document.getElementById('errorBanner');
  var successOverlay  = document.getElementById('successOverlay');
  var progressBar     = document.getElementById('progressBar');
  var sumEventInfo    = document.getElementById('sumEventInfo');
  var sumMenuList     = document.getElementById('sumMenuList');
  var sumTotalCount   = document.getElementById('sumTotalCount');

  /* ----------------------------------------------------------
     BUILD CATEGORY ACCORDIONS
  ---------------------------------------------------------- */
  function buildCategories() {
    if (!container) return;

    MENU_DATA.forEach(function (cat) {
      var block = document.createElement('div');
      block.className = 'cat-block';
      block.dataset.catId = cat.id;

      /* -- Header -- */
      var header = document.createElement('div');
      header.className = 'cat-header';
      header.setAttribute('role', 'button');
      header.setAttribute('tabindex', '0');
      header.setAttribute('aria-expanded', 'false');
      header.innerHTML =
        '<span class="cat-header__name">' + escHtml(cat.name) + '</span>' +
        '<span class="cat-header__badge cat-header__total">' + cat.items.length + ' items</span>' +
        '<span class="cat-header__badge cat-header__sel" data-sel-label="' + cat.id + '">0 selected</span>' +
        '<svg class="cat-header__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6,9 12,15 18,9"/></svg>';

      /* -- Body -- */
      var body = document.createElement('div');
      body.className = 'cat-body';
      body.setAttribute('aria-hidden', 'true');

      /* Select / Clear actions */
      var actions = document.createElement('div');
      actions.className = 'cat-body__actions';
      actions.innerHTML =
        '<button type="button" class="cat-act-btn" data-action="all" data-cat="' + cat.id + '">Select All</button>' +
        '<button type="button" class="cat-act-btn" data-action="clear" data-cat="' + cat.id + '">Clear</button>';
      body.appendChild(actions);

      /* Checkbox grid */
      var grid = document.createElement('div');
      grid.className = 'cb-grid';

      cat.items.forEach(function (item, idx) {
        var cbId = 'cb-' + cat.id + '-' + idx;
        var wrapper = document.createElement('label');
        wrapper.className = 'cb-item';
        wrapper.htmlFor = cbId;

        var cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.id = cbId;
        cb.name = cat.id;
        cb.value = item;
        cb.addEventListener('change', onCheckChange);

        var lbl = document.createElement('span');
        lbl.textContent = item;
        // Wrap in label element properly
        wrapper.appendChild(cb);
        wrapper.appendChild(lbl);
        grid.appendChild(wrapper);
      });

      body.appendChild(grid);
      block.appendChild(header);
      block.appendChild(body);
      container.appendChild(block);

      /* Toggle on click */
      header.addEventListener('click', function () {
        toggleCategory(block, header, body);
      });

      /* Keyboard support */
      header.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleCategory(block, header, body);
        }
      });

      /* Select All / Clear */
      actions.addEventListener('click', function (e) {
        var btn = e.target.closest('.cat-act-btn');
        if (!btn) return;
        var action = btn.dataset.action;
        var catId  = btn.dataset.cat;
        var checkboxes = grid.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (cb) {
          cb.checked = (action === 'all');
        });
        updateCategoryBadge(block, catId, checkboxes);
        updateSummary();
      });
    });
  }

  function toggleCategory(block, header, body) {
    var isOpen = block.classList.toggle('is-open');
    header.setAttribute('aria-expanded', isOpen);
    body.setAttribute('aria-hidden', !isOpen);
  }

  /* ----------------------------------------------------------
     CHECKBOX CHANGE HANDLER
  ---------------------------------------------------------- */
  function onCheckChange(e) {
    var catId     = e.target.name;
    var block     = document.querySelector('.cat-block[data-cat-id="' + catId + '"]');
    var checkboxes = block ? block.querySelectorAll('input[type="checkbox"]') : [];
    updateCategoryBadge(block, catId, checkboxes);
    updateSummary();
  }

  function updateCategoryBadge(block, catId, checkboxes) {
    if (!block) return;
    var count = 0;
    checkboxes.forEach(function (cb) { if (cb.checked) count++; });
    var selLabel = block.querySelector('[data-sel-label="' + catId + '"]');
    if (selLabel) selLabel.textContent = count + ' selected';
    if (count > 0) {
      block.classList.add('has-sel');
    } else {
      block.classList.remove('has-sel');
    }
  }

  /* ----------------------------------------------------------
     LIVE SUMMARY SIDEBAR
  ---------------------------------------------------------- */
  function updateSummary() {
    updateEventSummary();
    updateMenuSummary();
  }

  function updateEventSummary() {
    var name     = val('fullName');
    var phone    = val('phoneNumber');
    var guests   = val('guestCount');
    var etype    = val('eventType');
    var location = val('eventLocation');
    var date     = val('eventDate');

    var hasAny = name || phone || guests || etype;

    if (!hasAny) {
      sumEventInfo.innerHTML = '<div class="sum-placeholder">Fill in your details to see a preview here.</div>';
      return;
    }

    var rows = '';
    if (name)     rows += sumRow('Name',     name);
    if (phone)    rows += sumRow('Phone',    phone);
    if (etype)    rows += sumRow('Event',    etype);
    if (guests)   rows += sumRow('Guests',   guests);
    if (location) rows += sumRow('Location', location);
    if (date)     rows += sumRow('Date',     formatDate(date));

    sumEventInfo.innerHTML = rows;
  }

  function sumRow(label, value) {
    return '<div class="sum-event-row">' +
      '<span class="sum-event-label">' + escHtml(label) + '</span>' +
      '<span class="sum-event-val">'   + escHtml(value) + '</span>' +
    '</div>';
  }

  function updateMenuSummary() {
    var total = 0;
    var html  = '';

    MENU_DATA.forEach(function (cat) {
      var checkboxes = document.querySelectorAll('input[name="' + cat.id + '"]:checked');
      if (checkboxes.length === 0) return;
      var items = [];
      checkboxes.forEach(function (cb) { items.push(cb.value); });
      total += items.length;
      html +=
        '<div class="sum-cat">' +
          '<div class="sum-cat__name">' + escHtml(cat.name) + '</div>' +
          '<div class="sum-cat__items">' + items.map(escHtml).join(', ') + '</div>' +
        '</div>';
    });

    sumMenuList.innerHTML = html || '<div class="sum-placeholder">No dishes selected yet.</div>';
    sumTotalCount.textContent = total;
  }

  /* ----------------------------------------------------------
     LIVE INPUT → UPDATE SUMMARY
  ---------------------------------------------------------- */
  var watchFields = ['fullName', 'phoneNumber', 'guestCount', 'eventType', 'eventLocation', 'eventDate'];
  watchFields.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener('input',  updateSummary);
      el.addEventListener('change', updateSummary);
    }
  });

  /* ----------------------------------------------------------
     FORM VALIDATION
  ---------------------------------------------------------- */
  function validateForm() {
    var valid = true;

    /* Full Name */
    var nameEl = document.getElementById('fullName');
    var fgName = document.getElementById('fg-name');
    if (!nameEl.value.trim()) {
      fgName.classList.add('has-error');
      valid = false;
    } else {
      fgName.classList.remove('has-error');
    }

    /* Phone — must be 10 digits */
    var phoneEl = document.getElementById('phoneNumber');
    var fgPhone = document.getElementById('fg-phone');
    if (!/^[0-9]{10}$/.test(phoneEl.value.trim())) {
      fgPhone.classList.add('has-error');
      valid = false;
    } else {
      fgPhone.classList.remove('has-error');
    }

    /* Guests */
    var guestEl = document.getElementById('guestCount');
    var fgGuest = document.getElementById('fg-guests');
    if (!guestEl.value) {
      fgGuest.classList.add('has-error');
      valid = false;
    } else {
      fgGuest.classList.remove('has-error');
    }

    /* Event Type */
    var etypeEl = document.getElementById('eventType');
    var fgEtype = document.getElementById('fg-etype');
    if (!etypeEl.value) {
      fgEtype.classList.add('has-error');
      valid = false;
    } else {
      fgEtype.classList.remove('has-error');
    }

    return valid;
  }

  /* Remove error state on user input */
  ['fullName', 'phoneNumber', 'guestCount', 'eventType'].forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', function () {
      var fg = el.closest('.form-group');
      if (fg) fg.classList.remove('has-error');
    });
    el.addEventListener('change', function () {
      var fg = el.closest('.form-group');
      if (fg) fg.classList.remove('has-error');
    });
  });

  /* ----------------------------------------------------------
     BUILD WHATSAPP MESSAGE
     Format:
       Hello Maitree Foods,

       New Menu Customization Request:

       Name: ...
       Phone: ...
       Guests: ...
       Location: ...
       Event Type: ...
       Date: ...

       Selected Menu:

       Paneer Dishes:
       - Shahi Paneer
       - Paneer Tikka

       ...

       Please contact me with quotation.
  ---------------------------------------------------------- */
  function buildWhatsAppMessage() {
    var name     = val('fullName');
    var phone    = val('phoneNumber');
    var guests   = val('guestCount');
    var etype    = val('eventType');
    var location = val('eventLocation');
    var date     = val('eventDate');

    var lines = [];
    lines.push('Hello Maitree Foods,');
    lines.push('');
    lines.push('New Menu Customization Request:');
    lines.push('');
    lines.push('Name: '       + name);
    lines.push('Phone: '      + phone);
    lines.push('Guests: '     + guests);
    if (location) lines.push('Location: ' + location);
    lines.push('Event Type: ' + etype);
    if (date) lines.push('Date: ' + formatDate(date));
    lines.push('');
    lines.push('Selected Menu:');
    lines.push('');

    var anySelected = false;

    MENU_DATA.forEach(function (cat) {
  var checked = document.querySelectorAll('input[name="' + cat.id + '"]:checked');
  if (checked.length === 0) return;

  anySelected = true;

  // Add space before each group
  lines.push('');

  checked.forEach(function (cb) {
    lines.push('* ' + cb.value);
  });

  lines.push('');
});

    if (!anySelected) {
      lines.push('(No specific dishes selected — please suggest a standard menu)');
      lines.push('');
    }

    lines.push('Please contact me with quotation.');

    return lines.join('\n');
  }

  /* ----------------------------------------------------------
     FORM SUBMIT
  ---------------------------------------------------------- */
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      /* Validate */
      var isValid = validateForm();
      if (!isValid) {
        /* Show banner */
        errorBanner.textContent = 'Please fill in all required fields (Name, Phone, Guests, Event Type) before submitting.';
        errorBanner.style.display = 'block';

        /* Smooth scroll to first error */
        var firstError = form.querySelector('.has-error');
        if (firstError) {
          var top = firstError.getBoundingClientRect().top + window.pageYOffset - 120;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
        return;
      }

      /* Hide error banner */
      errorBanner.style.display = 'none';

      /* Build message */
      var message = buildWhatsAppMessage();
      var encoded = encodeURIComponent(message);
      var waUrl   = 'https://wa.me/919922925739?text=' + encoded;

      /* Show success overlay */
      successOverlay.classList.add('is-visible');

      /* Animate progress bar */
      setTimeout(function () {
        progressBar.style.width = '100%';
      }, 50);

      /* Redirect after animation */
      setTimeout(function () {
        window.location.href = waUrl;
      }, 1600);
    });
  }

  /* ----------------------------------------------------------
     UTILS
  ---------------------------------------------------------- */
  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  function escHtml(str) {
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function formatDate(dateStr) {
    if (!dateStr) return '';
    var parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var m = parseInt(parts[1], 10) - 1;
    return parts[2] + ' ' + (months[m] || parts[1]) + ' ' + parts[0];
  }

  /* ----------------------------------------------------------
     INIT
  ---------------------------------------------------------- */
  buildCategories();
  updateSummary();

})();
