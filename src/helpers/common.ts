import moment from 'moment';
import 'moment/locale/ko';
import { Color } from 'src/themes';
moment.locale('ko');
export const getMonthInWeek = (dates: any, selectedDate: string) => {
  const list = Array(7)
    .fill(undefined)
    .map((itemDay, indexItem) =>
      moment(selectedDate, 'YYYY-MM-DD')
        .startOf('week')
        .subtract(-(indexItem + 7 * dates), 'day')
        .locale('ko')
        .format('MMM'),
    );
  return list[0];
};

export const getDatesInWeek = (dates: any, selectedDate: string) => {
  return Array(7)
    .fill(undefined)
    .map((itemDay, indexItem) =>
      moment(selectedDate, 'YYYY-MM-DD')
        .subtract(-(indexItem + 7 * dates), 'day')
        .format('YYYY-MM-DD'),
    );
};

const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];
export function abbreviateNumber(number: number | undefined) {
  if (number) {
    // what tier? (determines SI symbol)
    // eslint-disable-next-line no-bitwise
    const tier = (Math.log10(number) / 3) | 0;

    // if zero, we don't need a suffix
    if (tier === 0) {
      return number;
    }

    // get suffix and determine scale
    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);

    // scale the number
    const scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
  } else {
    return 0;
  }
}

const dateFormat = 'YYYY-MM-DD';

export function renderColorDateCalendar(date: any, selectedDate: string, enableDate?: Array<string>) {
  if (moment(date).format(dateFormat) === selectedDate) {
    return {
      textColor: Color.white,
      bgColor: Color.red,
    };
  } else if (!enableDate?.includes(moment(date).format(dateFormat)) || moment(date).isBefore(moment())) {
    return {
      textColor: Color.black,
      bgColor: Color.gray_light,
    };
  } else {
    return {
      textColor: Color.black,
      bgColor: 'transparent',
    };
  }
}

export const getDistrict = (district: string | undefined | null) => {
  const findDistrict: number | undefined = district?.indexOf('구');
  const newDistrict = district?.slice(0, findDistrict ? findDistrict + 1 : 0);
  return newDistrict;
};
