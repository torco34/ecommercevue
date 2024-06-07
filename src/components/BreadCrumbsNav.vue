<!-- components/Breadcrumbs.vue -->
<template>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" v-for="(crumb, index) in breadcrumbs" :key="index">
          <router-link v-if="crumb.link" :to="crumb.link">{{ crumb.name }}</router-link>
          <span v-else>{{ crumb.name }}</span>
        </li>
      </ol>
    </nav>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  const breadcrumbs = computed(() => {
    let pathArray = route.path.split('/');
    pathArray.shift();
    let breadcrumbArray = [];
    let link = '';
  
    for (let i = 0; i < pathArray.length; i++) {
      link += `/${pathArray[i]}`;
      breadcrumbArray.push({
        name: pathArray[i],
        link: i === pathArray.length - 1 ? null : link,
      });
    }
  
    return breadcrumbArray;
  });
  </script>
  
  <style scoped lang="scss">
  .breadcrumb {
    background-color: #f8f9fa;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    border-radius: 0.25rem;
  }
  
  .breadcrumb-item + .breadcrumb-item::before {
    display: inline-block;
    padding-right: 0.5rem;
    color: #6c757d;
    content: "/";
  }
  
  .breadcrumb-item > a {
    color: $tarracota;
    text-decoration: none;
    background-color: transparent;
  }
  
  .breadcrumb-item > a:hover {
    color: $tarracota;
    text-decoration: underline;
  }
  </style>
  