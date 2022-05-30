export default function Index() {
  return (
    <div className="p-4 mt-2 text-gray-500 pb-24">
      <div className="flex flex-col mt-8">
        <h2 className="text-primary-red text-xl font-bold mb-6">
          撰寫網頁程式
        </h2>
        <p>寫程式前先確認幾件事</p> <br />
        <p>· 要⽤什麼框架寫？</p>
        <p>· 要⽤什麼⼯具輔助？</p>
        <p>· 要找哪些插件？</p>
        <p>· 哪段程式要模組化？</p>
        <p>· 哪些區塊要保留串動態資料？</p>
        <p>· 哪邊⽇後需要經常置換？</p>
        <p>· 資料串接的部分跟後端配合會⽅便嗎？</p>
      </div>
      <div className="flex flex-col mt-16">
        <h2 className="text-primary-red text-2xl font-bold mb-4">
          HTML 結構 → CSS 樣式 → JavaScript 動態 → 部分資料串</h2>
        <p>基本響應式開發注意事項</p>
        <h4 className="font-semibold mb-2 mt-6"> 1. 以 HTML5 宣告開發</h4>
        <p>如果要支援 IE8 以下，請使用 html5shiv.js 或 respond.js 給不支援 HTML5 標籤的瀏覽器版本閱讀。</p>
        <h4 className="font-semibold mb-2 mt-6">2. 設定viewport使用裝置呈現正確</h4>
        <p>在&lt;head&gt;裡可以設定meta的name為viewport，這個標籤可以相應裝置做出正確的顯⽰。</p>
        <h4 className="font-semibold mb-2 mt-6">3. 設定 IE 版本相容性</h4>
        <p>在&lt;head&gt;裡設定，確保IE各版本的相容性，通常使⽤ content="IE=edge"，表⽰\
          「什麼版本的IE瀏覽器就⽤什麼版本的標準模式」，沒有加這⾏，在某些IE版本會跑版。</p>
        <h4 className="font-semibold mb-2 mt-6">4. 使用彈性單位</h4>
        <p>字型尺⼨的單位使⽤em、rem、vw區塊、圖⽚單位請善⽤%、vw、vh單位，以及mix和max功能。</p>
        <h4 className="font-semibold mb-2 mt-6">5. 各平台語法相容</h4>
        <p>程式做優雅降等和漸進式改善時，請多利⽤ CSS Hack、HTML Hack、Modernizr
          或其他Polyfill ⽅法修正。</p>
        <h4 className="font-semibold mb-2 mt-6">6. IE8 以下不做響應式</h4>
        <p>IE8以下不⽀援media queries、IE6以下不⽀援max(min)-width，所以版⾯寬度固定以內容最⼤寬度為佳。</p>
      </div>
    </div>
  );
}
