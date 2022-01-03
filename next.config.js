/** @type {import('next').NextConfig} */
const intercept = require('intercept-stdout');

/* 
  INFO: recoil 서버단 Warning Console.log 제거 함수
  Issue : https://github.com/facebookexperimental/Recoil/issues/733
*/
function interceptStdout(text) {
  if (text.includes('Duplicate atom key')) {
    return '';
  }
  return text;
}

module.exports = () => {
  intercept(interceptStdout);
  return {
    reactStrictMode: true,
  };
};
