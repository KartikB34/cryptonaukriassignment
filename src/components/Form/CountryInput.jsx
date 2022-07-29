import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';

// You could use any flag package you like.
// example: npm install flagpack
import 'flagpack/dist/flagpack.css';

const CountryInput = ({formdata,setFormdata}) => {
  const getFlag = (short: string) => {
    const data = require(`world_countries_lists/data/flags/24x24/${short.toLowerCase()}.png`);
    // for dumi
    if (typeof data === 'string') {
      return data;
    }
    // for CRA
    return data.default;
  };

  return (
    <>
      <ConfigProvider
        locale={en}
        areaMapper={(area) => {
          return {
            ...area,
            emoji: <span className={`fp ${area.short.toLowerCase()}`} />,
          };
        }}
      >
        <CountryPhoneInput  defaultValue={{ short: 'TW' }} />
      </ConfigProvider>
    </>
  );
};

export default CountryInput;