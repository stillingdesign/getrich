const colorsJson = require('./src/_data/colors.json');

export default {
    content: [ 'src/**/*.{md,html,webc}' ],
    corePlugins: {
      container: false,
    },
    theme: {
      aspectRatio: {
        '1/1': '1 / 1',
        '3/4': '3 / 4',
        '4/3': '4 / 3',
        '9/16': '9/16',
        '16/9': '16 / 9',
      },
      borderRadius: {
        '0': '0',
        '2': '0.125rem',
        '3': '0.1875rem',
        '4': '0.25rem',
        '5': '0.3125rem',
        '6': '0.375rem',
        '8': '0.5rem',
        '10': '0.625rem',
        '12': '0.75rem',
        '14': '0.875rem',
        '16': '1rem',
        '20': '1.25rem',
        '24': '1.5rem',
        'full': '9999px',
        'card': '1rem',
      },
      colors: (() => {
        let colors = {};
        // Add base colors
        colorsJson.forEach(item => {
          if (item.name && item.value) {
            colors[item.name] = `oklch(var(--color-${item.name}) / <alpha-value>)`;
          }
        });
        // Add theme-specific colors (light and dark)
        colorsJson.forEach(item => {
          if (item.colors) {
            item.colors.forEach(color => {
              colors[color.name] = `oklch(var(--color-${color.name}) / <alpha-value>)`;
            });
          }
        });
        // Add common Tailwind colors
        colors['current'] = 'currentColor';
        colors['transparent'] = 'transparent';
        return colors;
      })(),
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        '10': '0.625rem',
        '12': '0.75rem',
        '14': '0.875rem',
        '16': '1rem',
        '18': '1.125rem',
        '20': '1.25rem',
        '24': '1.5rem',
        '32': '2rem',
        '36': '2.25rem',
        '40': '2.5rem',
        '48': '3rem',
        '56': '3.5rem',
        '64': '4rem',
        '72': '4.5rem',
        '80': '5rem',
        '96': '6rem',
        '112': '7rem',
        '128': '8rem',
      },
      lineHeight: {
        '90': '0.9',
        '100': '1',
        '110': '1.1',
        '120': '1.2',
        '130': '1.3',
        '140': '1.4',
        '150': '1.5',
        '160': '1.6',
        '170': '1.7',
        '180': '1.8',
        '190': '1.9',
        '200': '2',
      },
      screens: {
        'sm': '768px',
        'md': '1136px',
        'lg': '1536px',
      },
      spacing: {
        '0': '0px',
        '1': '1px',
        '2': '0.125rem',
        '3': '0.1875rem',
        '4': '0.25rem',
        '6': '0.375rem',
        '8': '0.5rem',
        '10': '0.625rem',
        '12': '0.75rem',
        '14': '0.875rem',
        '16': '1rem',
        '18': '1.125rem',
        '20': '1.25rem',
        '24': '1.5rem',
        '28': '1.75rem',
        '32': '2rem',
        '36': '2.25rem',
        '40': '2.5rem',
        '44': '2.75rem',
        '48': '3rem',
        '56': '3.5rem',
        '64': '4rem',
        '72': '4.5rem',
        '80': '5rem',
        '96': '6rem',
        '112': '7rem',
        '128': '8rem',
        '144': '9rem',
        '160': '10rem',
        '176': '11rem',
        '192': '12rem',
        '208': '13rem',
        '224': '14rem',
        '240': '15rem',
        '248': '15.5rem',
        '256': '16rem',
        '288': '18rem',
        '320': '20rem',
        '336': '21rem',
        '352': '22rem',
        '384': '24rem',
        '416': '26rem',
        '424': '26.5rem',
        '448': '28rem',
        '480': '30rem',
        '512': '32rem',
        '576': '36rem',
        '600': '37.5rem',
        '608': '38rem',
        '640': '40rem',
        '672': '42rem',
        '688': '43rem',
        '704': '44rem',
        '736': '46rem',
        '768': '48rem',
        '776': '48.5rem',
        '800': '50rem',
        '832': '52rem',
        '864': '54rem',
        '896': '56rem',
        '928': '58rem',
        '952': '59.5rem',
      },
      extend: {
        height: {
          'full-56': 'calc(100% - 3.5rem)',
          'dvh-56': 'calc(100dvh - 3.5rem)',
          'dvh-96': 'calc(100dvh - 6rem)',
          'dvh-104': 'calc(100dvh - 6.5rem)',
          'dvh-112': 'calc(100dvh - 7rem)',
        },
        maxWidth: {
          'screen-lg': '1040px',
        },
        opacity: {
          '2': '.02',
          '4': '.04',
          '6': '.06',
          '8': '.08',
        }
      },
    },
    plugins: [],
  }