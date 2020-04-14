<template>
  <div class="row create">
     <form class="form-create mt-1" action="/walikan/walikan.id?_method=PUT" method="POST" enctype="multipart/form-data" >
      <div class='form-add-group row'>
        <div class='col-12 col-sm-4 form-check'>
          Share with...
          <ul class="group-nav">
            <li class="nav-item">
              <a class="nav-link" 
            href="?groupsId=this.id">this.name</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6">
            <div class="form-check mr-1">
              <input class="form-check-input" type="checkbox" id="record" name="record" value=this.id>
              <label class="form-check-label" for="record">this.name</label>
            </div>
        </div>
      
        <div class="col-12 text-center">
          <a href="/addgroup">Add a group to share this expense!</a>
        </div>
      </div>

      <div class="form-add-group row">
        <label for="title" class="col-12 col-sm-4">Item </label>
        <input type="text" class="create-input col-12 col-sm-6" name="title" id="title" value="walikan.title">
      </div>

      <div class="form-add-group row">
        <label for="categoryId" class="col-12 col-sm-4">Category</label>
        <select class="col-12 col-sm-6" id="categoryId" name="categoryId"> 
            <option value="this.id" >
            this.name
            </option>
        </select>
      </div>

      <div class="form-add-group row">
        <label for="amount" class="col-12 col-sm-4">Amount</label>
        <input type="number" class="create-input col-12 col-sm-6" name="amount" id="amount" value="walikan.amount">
      </div>

      <div class="form-add-group row">
        <label for="date " class="col-12 col-sm-4">Date</label>
        <input type="date" class="create-input col-12 col-sm-6" name="date" id="date" value="date">
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-outline-light mt-3">submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'WalikanEdit',

}
</script>