document.addEventListener('DOMContentLoaded', () => {
    class Carousel {
      constructor(node) {
        this.domNode = node;
        this.carouselItems = node.querySelectorAll('.carousel-item');
        this.previousButton = node.querySelector('.controls .previous');
        this.nextButton = node.querySelector('.controls .next');
        this.currentIndex = 0;
  
        this.previousButton.addEventListener('click', () => this.showPreviousItem());
        this.nextButton.addEventListener('click', () => this.showNextItem());
      }
  
      showItem(index) {
        this.carouselItems.forEach((item, i) => {
          item.classList.toggle('active', i === index);
        });
      }
  
      showPreviousItem() {
        this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
        this.showItem(this.currentIndex);
      }
  
      showNextItem() {
        this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
        this.showItem(this.currentIndex);
      }
    }
  
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => new Carousel(carousel));
  });
  