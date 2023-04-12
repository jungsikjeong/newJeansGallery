const useScroll = (containRef: any, scrollRef: any) => {
  const scrollList = scrollRef.current;
  const container = containRef.current;

  if (scrollList) {
    const onScroll = (e: any) => {
      console.log(containRef.current);
      e.preventDefault();

      let viewWidth = window.innerWidth;
      let galleryPosition = container.offsetTop;
      let scrollLocation = document.documentElement.scrollTop;

      if (
        viewWidth >= 768 &&
        scrollLocation >= galleryPosition &&
        scrollLocation < galleryPosition + 4000
      ) {
        let percent = ((scrollLocation - galleryPosition) / 4000) * -80;
        scrollList.style.transform = 'translateX(' + percent + '%)';
      }
    };

    onScroll('');
  }
};

export default useScroll;
