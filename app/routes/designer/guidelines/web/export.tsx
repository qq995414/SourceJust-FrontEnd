export default function Index() {
  return (
    <div className="p-4 mt-2 text-gray-500">
      <div className="flex flex-col mt-4">
        <h2 className="text-primary-red text-xl font-bold mb-6">
          ·&nbsp; 給前端的檔案注意事項</h2>
        <div className="flex flex-col">
          <h4 className="font-semibold mb-2"> 1. 部分設計可用現成框架做</h4>
          <p>像是 Bootstrap 框架本身提供的內建版型或是像 Font Awesom 提供的免費 icon，設計就不
            用重新設計，前端也不需另外切 icon，可以直接套進網頁裡。</p>
          <p className="text-red-600 text-sm mt-4">※請把要使用的 icon 和功能連結都貼給前端喔!</p>
          <img
            className="mt-10 self-center"
            src="/images/export1.svg"
            alt="" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold mb-2 mt-10"> 2. 保留向量、放大不失真的圖形</h4>
          <p>在製作視覺稿時盡量想好可能要被拆出的元件，這些元件也要保留
            <span className="text-black font-semibold">向量圖形</span> 或
            <span className="text-black font-semibold">illustrator 連結</span>
            ，讓前端可以彈性使用。</p>
          <p className="text-red-600 text-sm mt-4">※請把要使用的 icon 和功能連結都貼給前端喔!</p>
          <img
            className="mt-10 self-center"
            src="/images/export2.svg"
            alt="" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold mb-2 mt-10"> 3. 謹慎使用混合模式</h4>
          <p>兩個需要被拆開的元件基本上會存成兩張圖，若要使用效果請
            <span className="text-black font-semibold">獨立在每個元件上使用</span> ，一般來說在
            網頁上不會特別使用「混合模式(Blend Mode)」功能，因為部分瀏覽器不支援，除 了特殊設計需求，請再與前端討論。</p>
          <img
            className="mt-10 self-start"
            src="/images/export3.svg"
            alt="" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold mb-2 mt-10"> 4. 保留文字選取</h4>
          <p>為了節省重新打字和校對錯字的時間，請保留文字讓前端直接選取貼上，建議一般內文不要做成圖，除了特殊
            文字可以壓成字框之外，保留文字也是對網站 SEO 和使用者體驗加分的。</p>
          <img
            className="mt-10 self-center"
            src="/images/export4.svg"
            alt="" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold mb-2 mt-10"> 5. 另附字型檔</h4>
          <p className="mb-3">設計稿若需使用特殊字型(非電腦預設字)就請另外附上字型檔讓前端安裝，以防文字跑掉影響切版。</p>
          <p>雲端文字 :
            <a
              className="text-primary-blue  underline"
              target="_blank"
              href="https://fonts.google.com/noto"
              rel="noopener noreferrer">Google Font</a>、
            <a
              className="text-primary-blue  underline"
              target="_blank"
              href="https://fonts.google.com/noto"
              rel="noopener noreferrer">Google Noto Fonts</a>、
            <a
              className="text-primary-blue  underline"
              target="_blank"
              href="https://fonts.google.com/noto"
              rel="noopener noreferrer">Adobe Typekit</a>、
            <a
              className="text-primary-blue  underline"
              target="_blank"
              href="https://fonts.google.com/noto"
              rel="noopener noreferrer">justfont</a>、
            <a
              className="text-primary-blue  underline"
              target="_blank"
              href="https://fonts.google.com/noto"
              rel="noopener noreferrer">iFontCloud</a></p>
          <img
            className="mt-10 self-start"
            src="/images/export5.svg"
            alt="" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold mb-2 mt-10"> 6. 做好圖層管理</h4>
          <p>
            設計好的圖層應做好資料夾整理，並標上看得懂的名稱，<span className="text-black font-semibold">
              完整的元件應分別用資料夾包起來</span>，方便給前端切版和日後維護，此外也特別注意將
            <span className="text-black font-semibold">互動變化的設計統一放置同一層資料夾</span>，
            例如標明「滑鼠移入/移出/點擊時」、「打開/關閉」等等，確保前端製作互 動效果時風格保持一致。</p>
          <img
            className="mt-10 self-center"
            src="/images/export6.svg"
            alt="" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold mb-2 mt-10"> 6. 做好圖層管理</h4>
          <p>
            除了給 psd 檔之外，需附上輸出的 jpg 或 pdf 預 覽圖檔，
            方便前端直接檢視，也確保每一頁的畫面跟檔案是正確的，除非特殊狀況，通常都是
            <span className="text-black font-semibold">一頁一個檔案</span>。
          </p>
          <img
            className="mt-10 self-center"
            src="/images/export7.svg"
            alt="" />
        </div>
      </div>
      <div className="flex flex-col mt-16">
        <h2 className="text-red-600 text-xl font-bold mb-6">
          ·&nbsp; 有需要請附上其他說明:</h2>
        <h4 className="font-semibold mb-2"> 1. Guideline 規格表</h4>
        <p>統一歸納列出網站的字體大小、顏色色碼或其他必要的元素，讓前端重複使用這些基本規範。</p>
        <h4 className="font-semibold mb-2 mt-6">2. 視覺稿上標註尺寸</h4>
        <p>有些設計師會使用工具在視覺稿上標註尺寸，主要是在 APP 執行上讓工程師比較好排版，網頁比較少人執行，
          若有需要可以標明給前端，確保畫面大小是一模一樣。</p>
        <h4 className="font-semibold mb-2 mt-6">3. 動畫的示意</h4>
        <p>若需要前端執行動畫撰寫，至少在設計稿裡要放入「開始畫面」和「結束畫面」兩種示意畫面或其他參考動態。</p>
        <h4 className="font-semibold mb-2 mt-6">4. 網頁參考連結</h4>
        <p> 不管是功能、動畫的需求，若參考過很多網站，建議放上參考連結，讓前端好執行。</p>
        <h4 className="font-semibold mb-2 mt-6"> 5. ppt 文字備註</h4>
        <p>建議把所有需求和資料放到 ppt 簡報裡，以防前端漏掉訊息，也能確保實踐創意的想法。</p>
        <p className="mt-4"> Prototype 工具：invision、figma </p>
        <p>標註工具：zeplin、sympli、markman</p>
      </div>
    </div>
  );
}
