const findButton = document.getElementById("findButton");
const tagInput = document.getElementById("tagInput");
const results = document.getElementById("results");

async function findTree() {
    const tag = tagInput.value;

    const response = await fetch(`/api/trees/${tag}`);

    const tree = await response.json();

    results.innerHTML = `
        <h2>Tree Details</h2>

        <p><strong>Tag:</strong> ${tree.tag}</p>
        <p><strong>Position:</strong> ${tree.position}</p>
        <p><strong>Colour:</strong> ${tree.colour}</p>
        <p><strong>WooCommerce:</strong> ${tree.wcStatus}</p>
        <p><strong>WC Changed:</strong> ${new Date(tree.wcLastChanged).toLocaleDateString()}</p>
        <p><strong>Sell Score:</strong> ${tree.sellScore}</p>
        <p><strong>Size:</strong> ${tree.bagSize}</p>
        <p><strong>Price:</strong> ${tree.price}</p>

        <p><strong>Photo Quality:</strong> ${tree.photoQuality}</p>
        <p><strong>Best Photo:</strong> ${new Date(tree.bestPhotoDate).toLocaleDateString()}</p>
        <p><strong>Recent Photo:</strong> ${new Date(tree.recentPhotoDate).toLocaleDateString()}</p>
        <p><strong>Transport:</strong> ${tree.transportSize}</p>
        <p><strong>Relative Size:</strong> ${tree.relativeSize}</p>
        <p><strong>Soil:</strong> ${tree.soilPercent}</p>

        <p><strong>Date Added:</strong> ${new Date(tree.dateAdded).toLocaleDateString()}</p>

        <p><strong>Notes:</strong> ${tree.notes}</p>
    `;
}

findButton.addEventListener("click", findTree);

tagInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        findTree();
    }
});