<template>
  <v-card>
    <v-card-title>
      Unity Builds - 2020.1.61f
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table 
        :headers="headers"
        :items="reports"
        :search="search"
        :items-per-page="10">

        <template v-slot:item.build_status="{ item }">
            <v-chip 
              :color="getColour(item.build_status)" 
              dark
              label>
              {{ item.build_status }}
            </v-chip>
        </template>

        <template v-slot:item.build_link="{ item }">
          <a v-bind:href="''">{{ item.build_link }}</a>
        </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "Number", align: "start", sortable: true, value: "build_number" },
        { text: "Type", sortable: true, value: "build_type" },
        { text: "Size", sortable: true, value: "build_size" },
        { text: "Time", sortable: true, value: "build_time" },
        { text: "Status", sortable: true, value: "build_status" },
        { text: "Timestamp", sortable: true, value: "timestamp" },
        { text: "Link", sortable: true, value: "build_link" }
      ],
      reports: [
        {
          build_number: "37",
          build_type: "Release",
          build_size: "56.6 mb",
          build_time: "00:00:06",
          build_status: "Successful",
          timestamp: "2020-09-29 19:53:22",
          build_link: "http://localhost:8081/job/TestGame/43/"
        },
      ],
    };
  },

  methods: {
      getColour (status) {
          if ( status === 'Failed' ) return 'red';
          else return 'green';
      }
  }
};
</script>

<style>
td {
  color: rgb(255, 222, 77);
}
</style>