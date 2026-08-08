const findButton = document.getElementById("findButton");
const tagInput = document.getElementById("tagInput");
const results = document.getElementById("results");

async function findTree() {
    const tag = tagInput.value;

    const response = await fetch(`/api/trees/${tag}`);

    const tree = await response.json();

    if (!response.ok) {
      results.innerHTML = `<p>Tree ${tag} not found.</p>`;
      return;
    }

results.innerHTML = `
    <h2>Tree Details</h2>

    <table>
        <tr>
            <td><strong>Tag</strong></td>
            <td>${tree.tag}</td>
        </tr>
        <tr>
            <td><strong>Position</strong></td>
            <td>${tree.position}</td>
        </tr>
        <tr>
            <td><strong>Colour</strong></td>
            <td>${tree.colour}</td>
        </tr>
        <tr>
            <td><strong>WooCommerce</strong></td>
            <td>${tree.wcStatus}</td>
        </tr>
        <tr>
            <td><strong>WC Changed</strong></td>
            <td>${new Date(tree.wcLastChanged).toLocaleDateString()}</td>
        </tr>
        <tr>
            <td><strong>Sell Score</strong></td>
            <td>${tree.sellScore}</td>
        </tr>
        <tr>
            <td><strong>Size</strong></td>
            <td>${tree.bagSize}</td>
        </tr>
        <tr>
            <td><strong>Price</strong></td>
            <td>${tree.price}</td>
        </tr>
        <tr>
            <td><strong>Photo Quality</strong></td>
            <td>${tree.photoQuality}</td>
        </tr>
        <tr>
            <td><strong>Best Photo</strong></td>
            <td>${new Date(tree.bestPhotoDate).toLocaleDateString()}</td>
        </tr>
        <tr>
            <td><strong>Recent Photo</strong></td>
            <td>${new Date(tree.recentPhotoDate).toLocaleDateString()}</td>
        </tr>
        <tr>
            <td><strong>Transport</strong></td>
            <td>${tree.transportSize}</td>
        </tr>
        <tr>
            <td><strong>Relative Size</strong></td>
            <td>${tree.relativeSize}</td>
        </tr>
        <tr>
            <td><strong>Soil</strong></td>
            <td>${tree.soilPercent || ""}</td>
        </tr>
        <tr>
            <td><strong>Date Added</strong></td>
            <td>${new Date(tree.dateAdded).toLocaleDateString()}</td>
        </tr>
        <tr>
            <td><strong>Notes</strong></td>
            <td>${tree.notes || ""}</td>
        </tr>
    </table>

    <button id="updateButton">Update</button>
`;
}

findButton.addEventListener("click", findTree);

tagInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        findTree();
    }
});