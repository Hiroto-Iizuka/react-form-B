export const dataYears = {};

export const setYear = () => {
  for (let i = 1920; i <= new Date().getFullYear(); i++) {
    const date = new Date(Date.UTC(i));
    const jc = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {year: 'numeric'}).format(date);
    dataYears.year = i;
    dataYears.japaneseCalendar = jc;
  }
}

export const setMonth = () => {
  for (let i = 1; i <= 12; i++) {
    const dataMonths = [];
    dataMonths.push(i);
  }
}

export const setDay = () => {
  for (let i = 1; i <= 31; i++) {
    const dataDays = [];
    dataDays.push(i);
  }
}