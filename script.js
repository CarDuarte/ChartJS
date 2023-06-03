document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("myChart").getContext("2d");

  const initialData = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Ventas",
        data: [500, 750, 300, 900, 600, 400],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const myChart = new Chart(ctx, {
    type: "bar",
    data: initialData,
    options: chartOptions,
  });

  const filter1 = document.getElementById("filter1");
  const filter2 = document.getElementById("filter2");

  const filterOptions = {
    option1: ["Option 1-1", "Option 1-2", "Option 1-3"],
    option2: ["Option 2-1", "Option 2-2", "Option 2-3"],
    option3: ["Option 3-1", "Option 3-2", "Option 3-3"],
  };

  filter1.addEventListener("change", handleFilterChange);
  filter2.addEventListener("change", handleFilterChange);

  function handleFilterChange() {
    const filter1Value = filter1.value;
    const filter2Value = filter2.value;
    updateFilterOptions(filter1Value);
    updateChart(filter1Value, filter2Value);
  }

  function updateFilterOptions(filter1Value) {
    const options = filterOptions[filter1Value];
    updateSelectOptions(filter2, options);
  }

  function updateSelectOptions(selectElement, options) {
    selectElement.innerHTML = "";
    options.forEach(function (optionText) {
      const option = document.createElement("option");
      option.value = optionText;
      option.text = optionText;
      selectElement.add(option);
    });
  }

  function updateChart(filter1Value, filter2Value) {
    const newData = generateData(filter1Value, filter2Value);
    myChart.data = newData;
    myChart.update();
  }

  function generateData(filter1Value, filter2Value) {
    const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
    const data = [];
    for (let i = 0; i < labels.length; i++) {
      data.push(Math.floor(Math.random() * 1000));
    }
    return {
      labels: labels,
      datasets: [
        {
          label: "Ventas",
          data: data,
          backgroundColor: "rgba(54, 162, 235, 0.6)",
        },
      ],
    };
  }

  const initialFilter1Value = filter1.value;
  updateFilterOptions(initialFilter1Value);
});
