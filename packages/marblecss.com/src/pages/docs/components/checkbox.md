---
description: "Develop description."
layout: "styleguide"
title: "Checkbox"
---

##### Checkbox

<div class="group-demo">
	<div class="checkbox">
		<input type="checkbox" id="ck-1-1" name="check-1" value="ck-1-1">
		<label for="ck-1-1">Honda</label>
	</div>
	<div class="checkbox">
		<input type="checkbox" id="ck-1-2" name="check-1" value="ck-1-2">
		<label for="ck-1-2">Toyota</label>
	</div>
	<div class="checkbox">
		<input type="checkbox" id="ck-1-3" name="check-1" value="ck-1-3">
		<label for="ck-1-3">Jeep</label>
	</div>
</div>

```xml
<div class="checkbox">
	<input type="checkbox" id="ck-1-1" name="check-1" value="ck-1-1">
	<label for="ck-1-1">Honda</label>
</div>
<div class="checkbox">
	<input type="checkbox" id="ck-1-2" name="check-1" value="ck-1-2">
	<label for="ck-1-2">Toyota</label>
</div>
<div class="checkbox">
	<input type="checkbox" id="ck-1-3" name="check-1" value="ck-1-3">
	<label for="ck-1-3">Jeep</label>
</div>
```

##### Checkbox inline

<div class="group-demo">
	<div class="checkbox-group checkbox-group-inline">
		<div class="checkbox">
			<input type="checkbox" id="ck-2-1" name="check-2" value="ck-2-1">
			<label for="ck-2-1">Honda</label>
		</div>
		<div class="checkbox">
			<input type="checkbox" id="ck-2-2" name="check-2" value="ck-2-2">
			<label for="ck-2-2">Toyota</label>
		</div>
		<div class="checkbox">
			<input type="checkbox" id="ck-2-3" name="check-2" value="ck-2-3">
			<label for="ck-2-3">Jeep</label>
		</div>
	</div>
</div>

```xml
<div class="checkbox-group checkbox-group-inline">
	<div class="checkbox">
		<input type="checkbox" id="ck-2-1" name="check-2" value="ck-2-1">
		<label for="ck-2-1">Honda</label>
	</div>
	<div class="checkbox">
		<input type="checkbox" id="ck-2-2" name="check-2" value="ck-2-2">
		<label for="ck-2-2">Toyota</label>
	</div>
	<div class="checkbox">
		<input type="checkbox" id="ck-2-3" name="check-2" value="ck-2-3">
		<label for="ck-2-3">Jeep</label>
	</div>
</div>
```

##### Checkbox indeterminate

<div class="group-demo">
	<div class="checkbox">
		<input type="checkbox" id="ck-3-1" name="check-3" value="ck-3-1">
		<label for="ck-3-1">Do you agree with the terms?</label>
	</div>
</div>

```xml
<div class="checkbox">
	<input type="checkbox" id="ck-3-1" name="check-3" value="ck-3-1">
	<label for="ck-3-1">Do you agree with the terms?</label>
</div>
<script type="text/javascript">
	var checkbox = document.getElementById('ck-3-1');
	checkbox.indeterminate = true;
</script>
```