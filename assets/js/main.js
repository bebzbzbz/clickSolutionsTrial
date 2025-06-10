const panel = document.getElementById("panel")

function togglePanel() {
    panel.classList.toggle("hide")
    panel.classList.toggle("flex-col")
}

document.getElementById("button").addEventListener("click", togglePanel)

// create accordions
const categoriesOptions = {
    "Investment vehicle": ["Lorem Ipsumus", "Checkbus", "Husk", "Kreate", "High Class", "Business Jazz"],
    "Company": ["Aircall", "Foxintelligence", "Spendesk", "Upflow", "Yousign", "SuperMeta", "ExtraLoop"],
    "Deal source": ["Deal Shark", "Camel Fish", "Plow", "Just Deals"],
    "Status": ["Active", "Pending", "Inactive", "Urgent"],
    "Date": ["Today", "Yesterday", "Last week", "Last month", "Last year"],
}

const accordionArea = document.getElementById("accordion-area")

function iterateOptions(array, optionsWrapper) {
    array.forEach(item => {
        const option = document.createElement("div")

        const checkbox = document.createElement("input")
        checkbox.id = item
        checkbox.value = item
        checkbox.type = "checkbox"

        const label = document.createElement("label")
        label.innerHTML = item
        label.htmlFor = item

        option.appendChild(checkbox)
        option.appendChild(label)
        optionsWrapper.appendChild(option)
    })
    }

Object.entries(categoriesOptions).forEach(([key, value]) => {
    const accordionWrapper = document.createElement("div")
    accordionWrapper.classList.add("accordion-wrapper")

    const filter = document.createElement("p")
    filter.innerHTML = key

    const arrow = document.createElement("img")
    arrow.src = "assets/svg/arrow.svg"
    arrow.classList.add("arrow")

    filter.addEventListener("click", () => {
        arrow.classList.toggle("flip")
        accordionWrapper.classList.toggle("active")
    })

    accordionWrapper.appendChild(filter)
    accordionWrapper.appendChild(arrow)
    
    const optionsWrapper = document.createElement("ul")
    optionsWrapper.classList.add("flex-col")

    accordionWrapper.appendChild(optionsWrapper)
    accordionArea.appendChild(accordionWrapper)

    iterateOptions(value.slice(0,5), optionsWrapper)

    if(value.length > 5) {
        const viewAll = document.createElement("a")
        viewAll.innerText = "View all..."
        viewAll.addEventListener("click", () => {
            iterateOptions(value.slice(5), optionsWrapper)
            viewAll.style.display = "none"
        })
        optionsWrapper.appendChild(viewAll)
    }
})

// ===== CLEAR ALL =====
const searchInput = document.querySelector("#search")
const clearAll = document.querySelector("#clear-all")
clearAll.addEventListener("click", () => {
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        checkbox.checked = false
    })
    searchInput.value = ""
})

// ===== SAVE VIEW =====
const saveView = document.querySelector("#save-view")
saveView.addEventListener("click", () => {
    const selectedFilters = []
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        if (checkbox.checked) {
            selectedFilters.push(checkbox.value)
        }
    })

    if(searchInput.value !== "") {
        console.log("Search input:", searchInput.value)
    }
    if(selectedFilters.length > 0) {
        console.log("Selected filters: ", selectedFilters)
    } 
    if(searchInput.value == "" && selectedFilters.length === 0){
        console.log("No filters selected")
    }
    togglePanel()
})