export default function Index() {
  return (
    <div className="p-4 mt-2 text-gray-500">
      <div className="mt-4">
        <span>免費圖庫：</span>
        <a
          className="text-primary-blue  underline"
          target="_blank"
          href="https://unsplash.com"
          rel="noopener noreferrer">
          Unslpash</a>、
        <a
          className="text-primary-blue  underline"
          target="_blank"
          href="https://thenounproject.com"
          rel="noopener noreferrer">Free icon</a>、
        <span className="text-primary-blue  underline">字型檔下載</span>
      </div>
      <div className="mt-8">
        <h2 className="text-primary-red text-xl font-bold mb-6">1.設計稿規格</h2>
        <p>· 色彩模式：RGB</p>
        <p>· 解析度：72 dpi</p>
        <p>· 單位：px (請盡量用網頁使用的單位 px，若用其他單位請對照 : 單位表)</p>
      </div>
      <div className="grid grid-cols-2 mt-8">
        <div>
          <h2 className="text-primary-red text-xl font-bold mb-6">PC</h2>
          <p>  a. 100% 檢視 <span className="text-red-600 font-medium">
            (Mac Retina 用 200% 檢視)</span></p>
          <p>b.  <span className="text-black font-medium">寬度 1920 px</span>、
            ⻑度不限</p>
          <p>c. 滿版寬度<span className="text-black font-medium"> 1920px</span> 、
            高度 <span className="text-black font-medium"> 1080px</span></p>
          <p>d. 內容集中的最大寬度
            <span className="text-black font-medium"> 1280px</span> </p>
          <p>  e. 格線系統 12 等分，與邊界間距 15px</p>
          <p> f. 滿版大圖尺寸
            <span className="text-black font-medium"> 920x1080</span>1</p>
          <p> g. 桌機瀏覽器文字預設為
            <span className="text-black font-medium"> 16px</span>(12pt)，</p>
          <p>最小只能設定到
            <span className="text-black font-medium"> 12px</span>(9pt)</p>
        </div>
        <div>
          <h2 className="text-primary-red font-black text-xl mb-6">Mobile</h2>
          <p>  a. 50% 檢視<span className="text-red-600 font-medium">
            (Mac Retina 用 100% 檢視)</span> </p>
          <p>b.
            <span className="text-black font-medium">寬度 750 px</span>、⻑度不限</p>
          <p>c. 滿版寬度<span className="text-black font-medium"> 750px</span> 、
            高度 <span className="text-black font-medium"> 1334px</span></p>
          <p> d. 內容集中的最大寬度
            <span className="text-black font-medium"> 640px</span> </p>
          <p> e. 格線系統 12 等分，與邊界間距 15px</p>
          <p> f. 滿版大圖尺寸
            <span className="text-black font-medium"> 750x1334</span></p>
          <p>g. 文章內文
            <span className="text-black font-medium"> ≥ 14px </span>(11pt)</p>
          <p>裝飾文字
            <span className="text-black font-medium"> ≥ 10px</span> (8pt)</p>
        </div>
      </div>
      <div className=" mt-10 text-center">
        <div className="text-primary-red font-medium">
          (Mac Retina 文字大小請乘兩倍)</div>
        <div>
          ※ 為保持圖片清晰，設計時需做兩倍大；檢視的百分比很重要，一般來說 100% 預覽是人眼實際觀看網頁的正確比例 !</div>
      </div>
      <div className="flex flex-col mt-6 place-items-center">
        <img className="self-center" src="/images/spec1.png" alt="" />
        <div className="mt-12 text-gray-500">
          <p>· 本範例暫時使用
            <a
              className="text-primary-blue underline"
              target="_blank"
              href="https://dribbble.com/shots/2196646-Bootstrap-3-0-Responsive-Grid-System-PSD-Download-Link"
              rel="noopener noreferrer">
              Bootstrap 3.0 Grids PSD</a>
            ，請照此概念修改設定並自製屬於自己方便操作的格線樣板</p><br />
          <p>· 其他 grid system 參考：<a
            className="text-primary-blue underline"
            target="_blank"
            href="https://cssauthor.com/bootstrap-grid-system-psd-templates"
            rel="noopener noreferrer">
            連結</a></p><br />
          <p className="text-red-600">
            · 內容集中的最大寬度視情況而定，一般桌機抓 13 吋筆電(1366x768)瀏覽時最舒服的寬度。</p><br />
        </div>
      </div>
      <div className="flex mt-12">
        <div className="place-self-center text-xl mr-16">
          · 手機版當文字內容做滿版時，需排在 640x1136px 裡面，因為 要確保在最小寬度 320px 手機上 正確顯示，
          除非特殊情況，希望 每個裝置大小都處於這樣的文字 排版縮放，可能會需要使用特殊 設定，請與前端討論。
        </div>
        <img className="w-96 mr-16" src="/images/spec2.png" alt="" />
      </div>
      <div className="mt-8">
        <h2 className="text-primary-red text-xl font-black mb-6">2. 滿版大圖做兩張</h2>
        <p className="text-primary-red font-medium">· 滿版大圖分開 - 做兩張</p> <br />
        <div className="flex mb-16">
          <div className="mr-8">
            桌機 <span className="text-black font-medium "> 1920x1080 px</span>
            <img className="mt-12" src="/images/spec3.svg" alt="" />
          </div>
          <div className="flex flex-col">
            <div> 手機
              <span className="text-black font-medium"> 750x1334 px</span>
            </div>
            <img className="mt-12" src="/images/spec4.svg" alt="" />
            <a
              className="flex self-center mt-4"
              href="https://www.persol-career.co.jp/"
              target="_blank"
              rel="noopener noreferrer">
              範例網站 : https://www.persol-career.co.jp/</a>
          </div>
        </div>
        <p className="text-primary-red font-medium">· 滿版大圖沿用同一張</p> <br />
        桌機 <span className="text-black font-medium ">  1920x1080 px</span>，
        直接等比例縮小 (若主要圖案不在中央，需由前端移動重點位置)
        <div className="flex mb-16">
          <div className="mr-8">
            <img className="mt-12" src="/images/spec5.svg" alt="" />
          </div>
          <div className="flex flex-col">
            <img className="mt-12" src="/images/spec6.svg" alt="" />
            <a
              className="flex self-center mt-4"
              href="https://memory.dji.com/"
              target="_blank"
              rel="noopener noreferrer">
              範例網站 : https://memory.dji.com/</a>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-primary-red text-xl font-black mb-6">3. 3D 全景圖</h2>
        <div className="flex flex-col">
          <div>
            360° 的圖片尺寸比較特殊，寬高需使用 2 的次方，基本上依據前端判斷效能壓縮圖片，逐序遞增或遞減:
            4098x2048、2048x1024、1024x512、512x256...至少給
            <span className="text-black font-medium "> 2048 x 1024 px</span>
          </div>
          <img className="mt-8 mr-12" src="/images/spec7.svg" alt="" />
          <a
            className="flex self-center mt-4"
            href="http://www.campoviejo.com/360/en/home"
            target="_blank"
            rel="noopener noreferrer">
            範例網站 : http://www.campoviejo.com/360/en/home</a>
        </div>
      </div>
    </div>
  );
}
