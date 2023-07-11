import React from 'react'

function HomePage() {
  return (
    <div class="grid-container">
     
     {/* Sidebar  */}
    <aside id="sidebar"> 
        <div class="sidebar-title">
            <div class="sidebar-brand">
                <img src='../public/logo.png'/>Quota Master
            </div>
        </div>
        <ul class="sidebar-list"> 
            <li class="sidebar-list-item">
                <span class="material-icons-outlined">dashboard</span>Dashboard
            </li>
            <li class="sidebar-list-item">
                <span class="material-icons-outlined">inventory_2</span>Products
            </li>
            <li class="sidebar-list-item">
                <span class="material-icons-outlined">fact_check</span>Inventory
            </li>
            <li class="sidebar-list-item">
                <span class="material-icons-outlined">add_shopping_cart</span>Purchase orders
            </li>
            <li class="sidebar-list-item">
                <span class="material-icons-outlined">shopping_cart</span>Sales Orders
            </li>
            <li class="sidebar-list-item">
                <span class="material-icons-outlined">poll</span>Reports
            </li>
            <li class="sidebar-list-item">
                <span class="material-icons-outlined">settings</span>Settings
            </li>

        </ul>
    </aside>

    {/* <Main  */}
    <main class="main-container">  
        <div class="main-title">
            <p class="font-weight-bold">DASHBOARD</p>
        </div>
       quota table lists
    </main>

</div>
  )
}

export default HomePage