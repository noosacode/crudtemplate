const findButton = document.getElementById("findButton");
const firstPosition = document.getElementById("firstPosition");
const lastPosition = document.getElementById("lastPosition");
const results = document.getElementById("results");

findButton.addEventListener("click", async () => {
  const first = firstPosition.value;
  const last = lastPosition.value;

  const token = localStorage.getItem("token");

  const response = await fetch(`/api/trees/positions/${first}/${last}`, {
    headers: {
      Authorization: token,
    },
  });

  console.log("Status:", response.status);

  const trees = await response.json();

  console.log("Trees returned:", trees);

  results.innerHTML = `
    <table border="1">
        <tr>
            <th>Position</th>
            <th>Tag</th>
            <th>Flower colour</th>
            <th>Bag size</th>
            <th>Moved?</th>
        </tr>

        ${trees
          .map(
            (tree) => `
            <tr>
                <td>${tree.position}</td>
                <td>${tree.tag}</td>
                <td>${tree.colour}</td>
                <td>${tree.bagSize}</td>
                <td><input type="checkbox" data-tag="${tree.tag}" data-position="${tree.position}"></td>
            </tr>
        `,
          )
          .join("")}
    </table>
    <button id="saveButton">Save Changes</button>
`;

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const tag = this.dataset.tag;
      const position = this.dataset.position;
      const newPosition = 70000 + Number(position);

      console.log("Tree:", tag, "New position:", newPosition);
    });
  });

  const saveButton = document.getElementById("saveButton");

  saveButton.addEventListener("click", async function () {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked');

    if (checked.length === 0) {
      alert("Please select at least one tree.");
      return;
    }

    for (const checkbox of checked) {
      const tag = checkbox.dataset.tag;
      const position = Number(checkbox.dataset.position);
      const newPosition = 70000 + position;

      console.log("Saving:", tag, "→", newPosition);

      const response = await fetch(`/api/trees/${tag}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          position: newPosition,
        }),
      });

      const savedTree = await response.json();

      console.log("Saved tree:", savedTree);
    }
  });
});