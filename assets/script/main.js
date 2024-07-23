const splide = new Splide(".splide", {
  // autoplay: true, // 自動再生
  type: "loop", // ループ
  gap: 15, // スライド間の余白
  fixedWidth: '310px',
  focus: 'center',
  arrows: boolean = false,
  classes: {
		pagination: 'splide__pagination your-class-pagination',
		page      : 'splide__pagination__page your-class-page',
  },
  // breakpoints: {
  //   780: {
  //     perPage: 1, // 500px未満の表示枚数
  //   },
  // },
}).mount();