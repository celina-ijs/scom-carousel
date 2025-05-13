import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

export default Styles.style({
  $nest: {
    'i-panel.container': {
      width: Theme.layout.container.width,
      maxWidth: Theme.layout.container.maxWidth,
      overflow: Theme.layout.container.overflow,
      textAlign: Theme.layout.container.textAlign as any,
      margin: '0 auto',
    },
    'i-carousel-slider.--indicators .dots-pagination': {
      display: 'flex',
      position: 'absolute',
      width: '100%',
      justifyContent: 'flex-end',
      gap: '0.5rem',
      bottom: '1.75rem',
      paddingRight: '1.75rem',
      $nest: {
        'li.--dot': {
          zIndex: 2,
        },
        'li > span': {
          display: 'inline-block',
          height: 5,
          width: 25,
          transition: 'all 0.2s ease 0s',
          borderRadius: '9999px',
          minHeight: 0,
          minWidth: 0,
          backgroundColor: '#ffffff66',
          border: 0,
          // border: `1px solid ${Styles.Theme.ThemeVars.colors.primary.main}`
        },
        'li.--active > span': {
          backgroundColor: '#fff',
        },
      },
    },
    'i-carousel-slider .dots-pagination': {
      display: 'none',
    },
    '.--carousel-item > img': {
      objectPosition: 'center'
    },
    '.--button-wrap:hover': {
      $nest: {
        '.--arrow-button:not(.disabled)': {
          boxShadow: 'none',
          display: 'flex !important',
          background: '#fff !important',
          borderRadius: '50%',
          $nest: {
            '> i-icon': {
              visibility: 'visible'
            },
          },
        },
      },
    },
    '.--arrow-button': {
      boxShadow: 'none',
      $nest: {
        '& > span': {
          display: 'none',
        },
        '& > i-icon': {
          visibility: 'hidden',
          $nest: {
            'svg': {
              fill: 'inherit'
            }
          }
        },
      },
    },
    '.text-left': {
      textAlign: 'left',
    },
    'i-carousel-slider': {
      height: '100%',
      $nest: {
        '> div': {
          height: '100%'
        },
        'i-carousel-item': {
          height: '100%'
        },
        '.wrapper-slider-list': {
          height: '100%'
        },
        '.slider-list': {
          height: '100%'
        }
      }
    }
  }
});
