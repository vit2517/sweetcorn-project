<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'ตรวจแปลง',
    caption: 'ตรวจแปลง',
    icon: 'leafcorn',
    link: '/servey'
  },
  {
    title: 'ตรวจโรค',
    caption: 'ตรวจโรค',
    icon: 'camera',
    link: '/disease'
  },
  {
    title: 'ป้องกันด้วยสารเคมี',
    caption: 'ป้องกันด้วยสารเคมี',
    icon: 'bug',
    link: '/chemical'
  },
  {
    title: 'ป้องกันด้วยเขตกรรม',
    caption: 'ป้องกันด้วยเขตกรรม',
    icon: 'landscape',
    link: '/protection'
  },
  {
    title: 'ทดสอบ',
    caption: 'ทดสอบ',
    icon: 'landscape',
    link: '/test'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
