<template>
  <v-card>
    <v-card-title>
      Reports
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
        :items-per-page="5">

        <template v-slot:item.status="{ item }">
            <v-chip :color="getColour(item.status)" dark>{{ item.status }}</v-chip>
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
        {
          text: "Type",
          align: "start",
          sortable: true,
          value: "type",
        },
        { text: "Comment", value: "comment" },
        { text: "Timestamp", value: "timestamp" },
        { text: "Status", value: "status" },
      ],
      reports: [
        {
          type: "Test",
          comment: "Comment",
          timestamp: "Thursday",
          status: 'FAIL',
        },
      ],
    };
  },

  methods: {
      getColour (status) {
          if ( status === 'FAIL' ) return 'red';
          else return 'green';
      }
  }
};
</script>