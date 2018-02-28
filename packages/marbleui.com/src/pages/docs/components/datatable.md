---
description: "Develop description."
layout: "styleguide"
title: "Data Table"
---

##### No Collections

<div style="position: relative; z-index: 1; height: 240px; width: 100%; border: 1px solid rgba(14, 20, 26, 0.2);" class="no-collections">
  <div class="empty-collection">
    <div class="notfound">
      <div class="notfound-icon">
        <span class="icon-16-database"></span>
      </div>
      <p class="notfound-text">You have no collections.</p>
    </div>
  </div>
</div>

```xml
<div class="no-collections">
  <div class="empty-collection">
    <div class="notfound">
      <div class="notfound-icon">
        <span class="icon-16-database"></span>
      </div>
      <p class="notfound-text">You have no collections.</p>
    </div>
  </div>
</div>
```

##### Empty Collection

<div style="position: relative; z-index: 1; height: 240px; width: 100%; border: 1px solid rgba(14, 20, 26, 0.2);" class="no-data">
  <div class="empty-data">
    <div class="notfound">
      <div class="notfound-icon">
        <span class="icon-16-database"></span>
      </div>
      <p class="notfound-text">This collection is empty.</p>
    </div>
  </div>
</div>

```xml
<div class="no-data">
  <div class="empty-data">
    <div class="notfound">
      <div class="notfound-icon">
        <span class="icon-16-database"></span>
      </div>
      <p class="notfound-text">This collection is empty.</p>
    </div>
  </div>
</div>
```

##### Loading
<div style="position: relative; z-index: 1; height: 200px; width: 100%; border: 1px solid rgba(14, 20, 26, 0.2);" class="loading">
  <div class="light-loader">
    <span class="spinner spinner-medium"></span>
  </div>
</div>

```xml
<div class="loading">
  <div class="light-loader">
    <span class="spinner spinner-medium"></span>
  </div>
</div>
```

##### Populated

<div class="datatable">
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th class="text-center">Required</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td class="text-center">
          <span class="icon-16-checkmark"></span>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td class="text-center">
          <span class="icon-16-checkmark"></span>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
        <td class="text-center">
          <span class="icon-16-checkmark"></span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

```xml
<div class="datatable">
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th class="text-center">Required</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td class="text-center">
          <span class="icon-16-checkmark"></span>
        </td>
      </tr>
      [...]
    </tbody>
  </table>
</div>
```
