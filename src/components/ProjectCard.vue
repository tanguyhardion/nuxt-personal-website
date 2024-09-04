<script setup lang="ts"></script>

<template>
  <div class="project">
    <div class="image">
      <slot name="image"></slot>
    </div>
    <div class="content">
      <div class="header">
        <slot name="header"></slot>
        <div class="chips">
          <div class="duration chip">
            <slot name="duration"></slot>
          </div>
          <div class="team chip">
            <slot name="team"></slot>
          </div>
          <div class="technologies chip">
            <slot name="technologies"></slot>
          </div>
        </div>
      </div>
      <div class="description">
        <slot name="description"></slot>
      </div>
      <div
        class="link"
        v-if="$slots.link"
      >
        <slot name="link"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;

  .image {
    width: 150px;
    height: 150px;
    border-radius: 24px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      h2 {
        font-size: 1.5rem;
      }

      .chips {
        display: flex;
        gap: 10px;

        .chip {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 2px 8px;
          border-radius: 8px;
          background-color: #121212;
          font-size: 13px;
        }
      }
    }

    .description {
      font-size: 1rem;
    }
  }
}
</style>
