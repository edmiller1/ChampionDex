<script>
import { Doughnut } from "vue-chartjs";
import Chart from "chart.js";
export default {
  extends: Doughnut,
  props: {
    chartData: {
      type: Object,
      default: null,
      required: true
    }
  },
  mounted() {
    // Overwriting base render method with actual data.
    Chart.defaults.global.defaultFontColor = "#f7fafc";
    this.renderChart({
      labels: ["Attack", "Defense", "Magic"],
      datasets: [
        {
          backgroundColor: ["#e53e3e", "#38a169", "#3182ce"],
          data: [
            this.chartData.info.attack,
            this.chartData.info.defense,
            this.chartData.info.magic
          ]
        }
      ]
    });
  }
};
</script>