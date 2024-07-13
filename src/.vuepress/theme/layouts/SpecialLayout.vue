<template>
  <Layout>
    <template #page>
      <main class="page">
        <div class="theme-hope-content">
          <Content />
        </div>
        <div class="page-meta">
          <PageMeta />
        </div>
        <div class="page-nav">
          <PageNav />
        </div>
      </main>
    </template>
    <template #sidebar-right>
      <TOC :headers="page.headers" :depth="tocDepth" />
    </template>
  </Layout>
</template>

<script setup>
import { computed } from 'vue';
import { usePageData, usePageFrontmatter } from '@vuepress/client';
import { Layout, PageMeta, PageNav, TOC } from 'vuepress-theme-hope';

const page = usePageData();
const frontmatter = usePageFrontmatter();

// 获取TOC深度,默认为2
const tocDepth = computed(() => frontmatter.value.tocDepth || 2);
</script>

<style scoped>
.page {
  padding-right: 16rem; /* 为右侧TOC留出空间 */
}

.theme-hope-content {
  max-width: 740px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
}

.page-meta {
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;
}

.page-nav {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>