(function () {
    const closeEveryItemInContainer = (container) => {
    const items = container.find(".products-menu__item");
    const content = container.find(".products-menu__content");

    items.removeClass("active");
    content.width(0);
  };

  const measureWidth = (block) => {
    let itemWidth;

    const screenWidth = $(window).width();
    const titlesWidth = block.find(".products-menu__title").width() * 3;
    const textContainer = block.find(".products-menu__container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));

    const isMobile = window.matchMedia("(max-width: 768px)");

    if (isMobile.matches) {
      itemWidth = screenWidth - titlesWidth
    } else {
      itemWidth = 500
    }

    return {
      container: itemWidth,
      textContainer: itemWidth - paddingLeft - paddingRight
    }
  };

  const openItem = (item) => {
    const hiddenBlock = item.find(".products-menu__content");
    const reqWidth = measureWidth(item).container;
    const textBlock = item.find(".products-menu__container");
    const textBlockWidth = measureWidth(item).textContainer;

    item.addClass("active");
    hiddenBlock.width(reqWidth);
    textBlock.width(textBlockWidth);
  };

  $(".products-menu__title").click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".products-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".products-menu");

    if (itemOpened) {
      closeEveryItemInContainer(container);
    } else {
      closeEveryItemInContainer(container);
      openItem(item);
    }
  });

  $(".products-menu__close").click((e) => {
    e.preventDefault();

    closeEveryItemInContainer($('.products-menu'));
  });
})();