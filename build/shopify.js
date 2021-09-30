function showProducts() {
  (function () {
    var scriptURL =
      'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (
        document.getElementsByTagName('head')[0] ||
        document.getElementsByTagName('body')[0]
      ).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'x-act-me.myshopify.com',
        storefrontAccessToken: '9a13b667ed477864768a4f2807265391',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('collection', {
          id: '276127350950',
          node: document.getElementById('collection-component-1632069914946'),
          moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
          options: {
            product: {
              styles: {
                product: {
                  '@media (min-width: 601px)': {
                    'max-width': 'calc(25% - 20px)',
                    'margin-left': '20px',
                    'margin-bottom': '50px',
                    'width': 'calc(25% - 20px)',
                  },
                  'img': {
                    height: 'calc(100% - 15px)',
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    top: '0',
                  },
                  'imgWrapper': {
                    'padding-top': 'calc(75% + 15px)',
                    'position': 'relative',
                    'height': '0',
                  },
                },
                title: {
                  'font-family': 'Montserrat, sans-serif',
                  'font-weight': 'normal',
                },
                button: {
                  'font-family': 'Montserrat, sans-serif',
                  ':hover': {
                    'background-color': '#314459',
                  },
                  'background-color': '#364c63',
                  ':focus': {
                    'background-color': '#314459',
                  },
                },
                price: {
                  'font-family': 'Montserrat, sans-serif',
                },
                compareAt: {
                  'font-family': 'Montserrat, sans-serif',
                },
                unitPrice: {
                  'font-family': 'Montserrat, sans-serif',
                },
              },
              buttonDestination: 'modal',
              contents: {
                options: false,
              },
              text: {
                button: 'View product',
              },
              googleFonts: ['Montserrat'],
            },
            productSet: {
              styles: {
                products: {
                  '@media (min-width: 601px)': {
                    'margin-left': '-20px',
                  },
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  '@media (min-width: 601px)': {
                    'max-width': '100%',
                    'margin-left': '0px',
                    'margin-bottom': '0px',
                  },
                },
                button: {
                  'font-family': 'Montserrat, sans-serif',
                  ':hover': {
                    'background-color': '#314459',
                  },
                  'background-color': '#364c63',
                  ':focus': {
                    'background-color': '#314459',
                  },
                },
                title: {
                  'font-family': 'Montserrat, sans-serif',
                  'font-weight': 'normal',
                  'font-size': '26px',
                  'color': '#4c4c4c',
                },
                price: {
                  'font-family': 'Montserrat, sans-serif',
                  'font-weight': 'normal',
                  'font-size': '18px',
                  'color': '#4c4c4c',
                },
                compareAt: {
                  'font-family': 'Montserrat, sans-serif',
                  'font-weight': 'normal',
                  'font-size': '15.299999999999999px',
                  'color': '#4c4c4c',
                },
                unitPrice: {
                  'font-family': 'Montserrat, sans-serif',
                  'font-weight': 'normal',
                  'font-size': '15.299999999999999px',
                  'color': '#4c4c4c',
                },
                description: {
                  'font-family': 'Montserrat, sans-serif',
                },
              },
              googleFonts: ['Montserrat'],
              text: {
                button: 'Add to cart',
              },
            },
            option: {
              styles: {
                label: {
                  'font-family': 'Open Sans, sans-serif',
                },
                select: {
                  'font-family': 'Open Sans, sans-serif',
                },
              },
              googleFonts: ['Open Sans'],
            },
            cart: {
              styles: {
                button: {
                  'font-family': 'Montserrat, sans-serif',
                  ':hover': {
                    'background-color': '#314459',
                  },
                  'background-color': '#364c63',
                  ':focus': {
                    'background-color': '#314459',
                  },
                },
              },
              text: {
                total: 'Subtotal',
                button: 'Checkout',
              },
              googleFonts: ['Montserrat'],
            },
            toggle: {
              styles: {
                toggle: {
                  'font-family': 'Montserrat, sans-serif',
                  'background-color': '#364c63',
                  ':hover': {
                    'background-color': '#314459',
                  },
                  ':focus': {
                    'background-color': '#314459',
                  },
                },
              },
              googleFonts: ['Montserrat'],
            },
          },
        });
      });
    }
  })();
}
