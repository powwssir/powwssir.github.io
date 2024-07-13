import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";

import { setupSnowFall } from "vuepress-theme-hope/presets/setupSnowFall.js";

import PageFooter from "./theme/components/PageFooter.vue"


// 主题预设 | vuepress-theme-hope https://theme-hope.vuejs.press/zh/guide/customize/presets.html#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%97%B4
export default defineClientConfig({
  // layouts: {
  //   PageFooter,
  // },
  // 客户端配置的使用方法 https://vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-config.html#setup
  setup() {
    //下雪特效
    // setupSnowFall();
    
    setupRunningTimeFooter(
      new Date("2024-07-01"),
      {
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",// "/": "Running time: :day days :hour hours :minute minutes :second seconds",
        // "/zh/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
    setupTransparentNavbar({ type: "homepage", light: "#333", dark: "#bbb" });
  },
});
