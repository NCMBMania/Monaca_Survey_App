// NCMBの初期化
const applicationKey = 'YOUR_APPLICATION_KEY';
const clientKey = 'YOUR_CLIENT_KEY';
window.ncmb = new NCMB(applicationKey, clientKey);

/*
  認証状態の確認を行う
  返値：
    真偽値。 true : 有効なログインの場合 / false : ログインしていない、または無効な場合
*/
async function loginCheck() {
  return false;
}
