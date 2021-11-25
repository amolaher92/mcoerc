<template>
  <button @click="showAlert">Hello world</button>
  <tab-view>
    <tab-panel header="About"> </tab-panel>
    <tab-panel header="Committee"></tab-panel>
    <tab-panel header="Activities"></tab-panel>
    <tab-panel header="Activity Plan"></tab-panel>
  </tab-view>
</template>

<script>
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

export default {
  components: {
    TabView,
    TabPanel,
  },

  methods: {
    showAlert() {
      // Use sweetalert2
      // this.$swal('Hello Vue world!!!');
      this.$swal.fire("Good job!", "You clicked the button!", "success");
    },
  },
};
</script>