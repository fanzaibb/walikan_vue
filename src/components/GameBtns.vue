<template>
  <div class="GameBtns">
    <section class="header">
        <div class="text-center">
          <a class="title" href="/">
          わりかん
          </a>
        </div>  
      </section>
      <section class="buttons d-flex justify-content-center">
        <div class="bts m-auto">
          <div class="exit">
            <a href="/logout">
              <div class="exit-btn">A</div>
              <p>Exit</p>
            </a>
          </div>
          <div class="manual">
            <a href="/manual">
              <div class="manual-btn">B</div>
              <p>Manual</p>
            </a>
          </div>
        </div>
        <div class="add-button">
          <a href='/walikan/create'>
            <div class="adding-x-bar align-self-center">
              <div class="x-round"></div>
            </div>
            <div class="adding-y-bar">
              <div class="y1"></div>
              <div class="y2"></div>
            </div>
            <div class="shadow-x-bar align-self-center">
            </div>
            <div class="shadow-y-bar">
              <div class="y3"></div>
              <div class="y4"></div>
            </div>
          </a>
        </div>
      </section>
    </main>
      <footer>
        <p>© 2020 - BWBB</p>
      </footer>
  </div>
</template>
