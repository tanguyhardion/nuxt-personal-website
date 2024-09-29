<script setup lang="ts">
import { marked } from 'marked';
import { skills } from '~/data/skills';

const content = marked.parse(skills);
</script>

<template>
  <div>
    <div
      class="skills rendered-html markdown-body"
      v-html="content"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.skills {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}
</style>

<!-- Styles to target the rendered HTML content -->
<style lang="scss">
.skills.rendered-html.markdown-body {
  img {
    border-radius: 8px;
    user-select: none;
  }

  h2, h3 {
    text-align: center;
  }

  h2 {
    margin-top: 32px;
    margin-bottom: 16px;
  }

  h3 {
    margin-bottom: 16px;

    &:not(:first-of-type) {
      margin-top: 24px;
    }
  }

  p {
    text-align: center;
    line-height: 1.5;
  }
}
</style>
