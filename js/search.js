$(document).ready(function () {
  const searchInputs = $("form.main-header__search input");
  const searchPopup = $("#search-popup");
  const closeSearchButton = $("#close-search-btn");

  function closeSearchPopup() {
    searchPopup.removeClass("search-popup--visible");
    setTimeout(function () {
      searchPopup.addClass("d-none").removeClass("d-flex");
    }, 300);
  }

  searchInputs.on("focus", function () {
    searchPopup.removeClass("d-none").addClass("d-flex");
    setTimeout(function () {
      searchPopup.addClass("search-popup--visible");
    }, 10);
  });

  closeSearchButton.on("click", function () {
    closeSearchPopup();
  });

  searchPopup.on("click", function (event) {
    if ($(event.target).is(searchPopup)) {
      closeSearchPopup();
    }
  });
});
