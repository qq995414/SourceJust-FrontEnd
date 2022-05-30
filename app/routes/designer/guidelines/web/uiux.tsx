export default function Index() {
  return (
    <div className="p-4 mt-2 text-gray-500">
      <div className="flex flex-col mt-4">
        <h2 className="text-primary-red text-xl font-bold mb-6">
          1. Menu / Navigation / Hamburger</h2> <br />
        <p>
          A. 選單設計要特別注意放置位置和明顯程度，還有動態和互動變化：
          <a
            className="text-primary-blue  underline"
            target="_blank"
            href="https://blog.designcrowd.com/article/964/how-to-create-a-great-navigation-menu-bar-design"
            rel="noopener noreferrer">連結</a>、
          <a
            className="text-primary-blue  underline"
            target="_blank"
            href="https://www.vandelaydesign.com/inspirationalnavigation-menus/"
            rel="noopener noreferrer">連結</a></p> <br />
        <p>
          B. 未必一定要使用漢堡選單：
          <a
            className="text-primary-blue  underline"
            target="_blank"
            href="https://medium.com/@kollinz/hamburger-menu-alternatives-for-mobile-navigation-a3a3beb555b8"
            rel="noopener noreferrer">連結</a></p>
        <img className="self-center mt-12" src="/images/uiux1.svg" alt="" />
      </div>
      <div className="grid grid-cols-2 mt-20">
        <div className="mr-52">
          <h2 className="text-primary-red text-xl font-bold my-6">
            2. Button / Link </h2>
          <p>A. 按鈕連結的互動 :&nbsp;&nbsp;
            <a
              className="text-primary-blue  underline"
              target="_blank"
              href="http://www.uiparade.com/skill-type/buttons/"
              rel="noopener noreferrer">連結</a>、
            <a
              className="text-primary-blue  underline"
              target="_blank"
              href="https://tympanus.net/Development/CreativeLinkEffects/"
              rel="noopener noreferrer">連結</a></p> <br />
          <p>B. 區塊連結的互動 ：
            <a
              className="text-primary-blue  underline"
              target="_blank"
              href="https://tympanus.net/Tutorials/CaptionHoverEffects/"
              rel="noopener noreferrer">連結</a></p> <br />
          <p>C. 特殊的表現方式 ：
            <a
              className="text-primary-blue  underline"
              target="_blank"
              href="https://tympanus.net/Development/TextStylesHoverEffects/"
              rel="noopener noreferrer">連結</a></p> <br />
        </div>
        <img src="/images/uiux2.svg" alt="" />
      </div>
      <div className="grid grid-cols-2 mt-12">
        <div className="mr-60">
          <h2 className="text-red-600 text-xl font-bold my-6">
            按鈕常見回饋：</h2>
          <p>· 游標停留在元素上方(hover)</p> <br />
          <p>· 游標點擊時(active)</p>
        </div>
        <img className="mt-6" src="/images/uiux3.svg" alt="" />
      </div>
      <div className="flex flex-col mt-12">
        <h2 className="text-primary-red text-xl font-bold my-6">
          3. Table </h2>
        <p>A. 表格要特別注意資料閱讀 的舒適性：
          <a
            className="text-primary-blue  underline"
            target="_blank"
            href="https://www.pinterest.com/joesimmons946/table-design-ui/?lp=true"
            rel="noopener noreferrer">連結</a></p> <br />
        <p>B. 多留意手機上的呈現，哪邊不動 (fixed)、哪邊可滑動 (dynamic )：
          <a
            className="text-primary-blue  underline"
            target="_blank"
            href="https://medium.com/nextux/design-better-data-tables-4ecc99d23356"
            rel="noopener noreferrer">連結</a>、
          <a
            className="text-primary-blue  underline"
            target="_blank"
            href="https://www.divante.com/blog/responsive-web-design-table-design"
            rel="noopener noreferrer">連結</a></p>
        <img className="mt-6 self-center" src="/images/uiux4.svg" alt="" />
      </div>
      <div className="flex flex-col mt-12">
        <h2 className="text-primary-red text-xl font-bold my-6">
          4. Form  </h2>
        <p>A. 表單樣式要注意響應式的變化以及手機版上可點擊的大小：
          <a
            className="text-primary-blue  underline"
            target="_blank"
            href="https://bashooka.com/inspiration/30-stunning-web-ui-form-designs/"
            rel="noopener noreferrer">連結</a></p> <br />
        <p>B. 操作方式、互動方式、完成 表單的回饋：
          <a
            className="text-primary-blue  underline"
            target="_blank"
            href="https://uxplanet.org/float-label-pattern-in-ux-form-design-7ab5e33010ab"
            rel="noopener noreferrer">連結</a>、
          <a
            className="text-primary-blue  underline"
            target="_blank"
            href="https://medium.com/nextux/design-better-forms-96fadca0f49c"
            rel="noopener noreferrer">連結</a></p> <br />
        <p>表單欄位常見回饋:</p>
        <p>&nbsp;· 游標焦點在元素上時 (focus)</p>
        <p>&nbsp;·  預設提示 (placeholder)</p>
        <p>&nbsp;· 不能使用狀態 (disable, readonly)</p>
        <p>&nbsp;· 錯誤狀態、錯誤提示 (erro state)</p>
        <p>&nbsp;· 完成狀態</p>
        <div className="flex mt-6">
          <img className="mr-8" src="/images/uiux5.svg" alt="" />
          <img src="/images/uiux6.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col mt-12">
        <h2 className="text-primary-red text-xl font-bold my-6">
          5. RWD ( Responsive Web Design )  </h2>
        <p>A. 響應式排版是有規則，不能亂放，通常都是右邊的內容會往下排：
          <a
            className="text-primary-blue  underline"
            target="_blank"
            href="https://designmodo.com/responsive-design-examples/"
            rel="noopener noreferrer">連結</a>
        </p> <br />
        <p>B. 請多觀察響應式版面排列的變化：
          <a
            className="text-primary-blue  underline"
            target="_blank"
            href="https://responsive-jp.com/"
            rel="noopener noreferrer">連結</a>、
          <a
            className="text-primary-blue  underline"
            target="_blank"
            href="https://mediaqueri.es/"
            rel="noopener noreferrer">連結</a></p>
        <img className="self-center mt-6" src="/images/uiux7.svg" alt="" />
        <img className="self-center mt-6" src="/images/uiux8.svg" alt="" />
      </div>
    </div>
  );
}
