export default function Index() {
  return (
    <div className="p-4 mt-2 text-gray-500">
      <div className="flex flex-col mt-4">
        <h2 className="text-primary-red text-xl font-bold mb-6">
          ·&nbsp; 體驗上需注意瀏覽器和裝置的特性，盡量不要跟原有體驗抵觸</h2>
        <h4 className="font-semibold mb-2"> 1. 不要把按鈕固定在視窗畫面最下方</h4>
        <p>手機上的 Safari 下方會自動疊上工具列，此時按鈕會被擋到而無法使用。</p>
        <h4 className="font-semibold mb-2 mt-6">2. 轉換手機上的觸控操作</h4>
        <p>手機上的觸控與捲軸滾動跟手勢不同有關，若在畫面上做除了滾動、點擊之外的動作，
          尤其拖曳、畫圖...等等手勢，可能會跟滾動做抵觸，請進一步思考觸發的方式。</p>
        <h4 className="font-semibold mb-2 mt-6">3. 彈性設計第一屏畫面</h4>
        <p>同樣 Safari 在沒有被滑動時，瀏覽器上面的網址列和下方的工具列會使整個頁面變得更小，且往下滑動時，
          上下列 會自動縮小或消失，網頁畫面會因此被推移，所以請不要定死滿版的畫面，讓其有些容許捲軸移動的範圍。</p>
        <h4 className="font-semibold mb-2 mt-6">4. 不要隨意鎖定翻轉功能</h4>
        <p> 手機翻轉是基本功能，照理論不該限定使用者的體驗，尤其一般人都是直屏瀏覽網頁，
          可能也設定了不翻橫轉功能，鎖直屏是非常不建議的動作。</p>
        <h4 className="font-semibold mb-2 mt-6"> 5. 鎖右鍵、防盜功能</h4>
        <p>因為網頁都是明碼，所以沒有意義，若需防盜和防竄改請在程式開發時做好保護機制。</p>
      </div>
      <div className="flex flex-col mt-8">
        <h2 className="text-primary-red text-xl font-bold mb-6">
          ·&nbsp; 其他常見網頁設計風格的注意事項</h2>
        <h4 className="font-semibold mb-2">1. 文字內容少、元件不多才適用滿版滾動</h4>
        <p>一旦內文很多勢必在小螢幕上被切到或大量使用捲軸，這樣一來對於視覺和體驗上不是最佳的狀況，請斟酌選用。</p>
        <h4 className="font-semibold mb-2 mt-6">2. 視差滾動要把背景大圖高度留多一些</h4>
        <p>因視差滾動時，圖片會上下位移，若高度不夠高，無法做出落差大的視差效果。</p>
        <h4 className="font-semibold mb-2 mt-6">3. 獨立 SVG 內的元件</h4>
        <p>前文提到 SVG 元件需保留在 psd 檔，若有一系列的 SVG 元素，建議獨立輸出 ai 檔，設計 SVG 時要注意哪些東西
          會被拆出來做成動畫，要把原件拆出來讓前端彈性使用， 另外，SVG 的元素越乾淨越好，一是方便前端撰寫程式， 二是減輕檔案的大小。</p>
        <h4 className="font-semibold mb-2 mt-6">4. 動態資料區塊要考慮最差的情況</h4>
        <p>當動態的資料在區塊內浮動，像是字數過少過多、圖片尺寸不如預期等等，可能造成版面偏移和破圖，請在設計時
          就要做好彈性設定和最壞的畫面打算，才能把各種可能畫面都考慮進去。</p>
        <h4 className="font-semibold mb-2 mt-6">5. 手機不做過多裝飾</h4>
        <p>使用手機看網站主要用來查閱資訊，加上手機效能不如桌機好，不適合讀取過多資料，因此必須將不必要的裝飾性
          圖案、過多動態效果、非主要的文字資訊都拿掉，以精簡手機畫面的資訊和減輕負荷。</p>
        <p className="flex justify-end mt-6">更多 UI, UX 技巧請參考相關網路資源：
          <a
            className="text-primary-blue  underline"
            target="_blank"
            href="https://material.io/"
            rel="noopener noreferrer">Material Design</a></p>
      </div>
      <div className="flex flex-col mt-8">
        <h2 className="text-primary-red text-xl font-bold mb-6">
          ·&nbsp; Favicon 頁籤圖示</h2>
        <p>請給向量圖或 <span className="text-primary-red">512x512 px </span>
          的方形 png 圖檔，再讓前端處理合適大小。</p>
        <img
          className="flex mt-10 self-center"
          src="/images/detail1.svg"
          alt="" />
      </div>
      <div className="flex flex-col mt-8">
        <h2 className="text-primary-red text-xl font-bold mb-6">
          ·&nbsp; Loading 設計</h2>
        <p> 1. 設計和製作的方法有很多種：
          <a
            className="text-primary-blue  underline"
            target="_blank"
            href="https://icons8.com/preloaders/"
            rel="noopener noreferrer">連結</a>、
          <a
            className="text-primary-blue  underline"
            target="_blank"
            href="https://digitalsynopsis.com/design/loading-animations-preloader-gifs-ui-ux-effects/"
            rel="noopener noreferrer">連結</a></p> <br />
        <p> 2. 通常有三種情況需要等待中的提醒：</p>
        <div className="ml-8">
          <p>· 首頁進網站之前</p>
          <p>· 圖片載入或動態文章載入時</p>
          <p>· 送出表單和等待資料回應時</p>
        </div>
        <img
          className="mt-10 self-start"
          src="/images/detail2.svg"
          alt="" />
      </div>
      <div className="flex flex-col mt-8">
        <h2 className="text-primary-red text-xl font-bold mb-6">
          ·&nbsp; 選取顏色</h2>
        <p>游標反白文字時的顏色預設為藍底黑字或是電腦系統預設色，可以給底色和文字色的色碼請前端更換唷！</p>
        <img
          className="flex mt-10 self-center"
          src="/images/detail3.svg"
          alt="" />
      </div>
      <div className="flex flex-col mt-8">
        <h2 className="text-primary-red text-xl font-bold mb-6">
          ·&nbsp; 錯誤畫面與狀態</h2>
        <p>當使用者進入一個已刪除的文章或是走進錯誤的網址時，通常主機會自動導去預設頁面，但若有設
          計樣式，會讓使用者體驗感受一致性，可以參考網路上針對 404 頁面的設計:</p>
        <img
          className="flex mt-10 self-center"
          src="/images/detail4.svg"
          alt="" />
      </div>
      <div className="flex flex-col mt-4">
        <h2 className="text-primary-red text-xl font-bold mb-6">
          ·&nbsp; 分享縮圖</h2>
        <p>
          如果沒有指定縮圖，平台會自動選擇網頁的其中一張圖作為縮圖，
          通常都是正方形的縮圖，需要從 Meta 設定，Facebook 和其他社群平台也有自己的標籤，Facebook 分享圖像規則請參考：
          <a
            className="text-primary-blue  underline"
            target="_blank"
            href="https://developers.facebook.com/docs/sharing/best-practices%23images"
            rel="noopener noreferrer">連結</a>
        </p>
        <div>
          <h4 className="text-primary-red font-bold mb-6 mt-12">
           &emsp; 1. 共用方形小圖</h4>
          <p>尺寸為 600x600 px 或 400x400 px，各平台通用，共用一張即可。</p>
          <p>(500px 以上的縮圖在手機上看會自動變大圖預覽，若想維持小縮圖，建議用 400x400 px)</p>
          <div className="grid grid-cols-2 mt-8 mb-4">
            <img src="/images/detail5.svg" alt="" />
            <img src="/images/detail6.svg" alt="" />
          </div>
          <p className="text-red-600 text-sm">
            ※因為 jpg 的圖在網頁上分享時會再被壓過一次而糊掉，建議使用 png 喔!</p>
        </div>
        <div>
          <h4 className="text-primary-red font-bold mb-6 mt-12">
          &emsp; 2. 分開設定 FB 大圖和一般分享縮圖</h4>
          <p>FB 的大圖，其他平台不一定適用(如下例)，若希望每個平台的縮圖顯示正常，必須將 FB和其他平台的分享圖分開製作，矩形大圖為
            <span className="text-primary-red"> 600x314 px</span>，
            方形小圖一樣使用
            <span className="text-primary-red"> 400x400 px</span>。</p>
          <div className="grid grid-cols-2 mt-8 mb-4">
            <img src="/images/detail7.svg" alt="" />
            <img className="self-center" src="/images/detail8.svg" alt="" />
          </div>
          <p className="text-red-600 text-sm">
            ※建議前端在 fb meta 設定前，先放其他社群平台(如 twitter)的分享圖，Line 才會抓到正方圖!</p>
        </div>
      </div>
    </div>
  );
}
