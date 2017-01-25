---
description: "Develop description."
layout: "styleguide"
title: "Forms"
---

##### Default Input

<form>
	<div class="form-group">
		<label for="input-regular">Label</label>
		<input id="input-regular" class="form-control" type="text" placeholder="Write something here...">
		<p class="help-block">A block of auxiliar text</p>
	</div>
</form>

```htmlmixed
<form>
	<div class="form-group">
		<label for="input-regular">Label</label>
		<input id="input-regular" class="form-control" type="text" placeholder="Write something here...">
		<p class="help-block">A block of auxiliar text</p>
	</div>
</form>
```

##### File Input

<form>
	<div class="form-group">
		<label for="input-regular">File selector</label>
		<input id="input-regular" class="form-control" type="file" placeholder="Select a file here...">
	</div>
</form>

```htmlmixex
<input id="input-regular" class="form-control" type="file" placeholder="Select a file here...">
```

##### Input + Copy to Clipboard

<form>
	<div class="form-group">
		<label>Example</label>
		<div class="has-action-button">
			<input class="form-control" type="text" onfocus="this.select();" onmouseup="return false;" value="Click to copy to clipboard">
			<button class="btn btn-sm btn-primary" type="button">
				<span class="icon-12-overlap"></span>
				<div class="btn-tooltip">Copy to clipboard</div>
			</button>
		</div>
	</div>
</form>

```htmlmixed
<div class="has-action-button">
	<input class="form-control" type="text" value="Click to copy to clipboard">
	<button class="btn btn-sm btn-primary" type="button">
		<span class="icon-12-overlap"></span>
		<div class="btn-tooltip">Copy to clipboard</div>
	</button>
</div>
```

##### Input Disabled

<form>
	<div class="form-group">
		<label for="input-disabled">Example</label>
		<input id="input-disabled" class="form-control" type="text" placeholder="Write something here..." disabled="">
	</div>
</form>

```htmlmixed
<div class="form-group">
	<label for="input-disabled">Example</label>
	<input id="input-disabled" class="form-control" type="text" placeholder="Write something here..." disabled="">
</div>
```

##### Input Read Only

<form>
	<div class="form-group">
		<label for="input-readonly">Example</label>
		<input id="input-readonly" class="form-control" type="text" value="Something to read" readonly="">
	</div>
</form>

```htmlmixed
<div class="form-group">
	<label for="input-readonly">Example</label>
	<input id="input-readonly" class="form-control" type="text" value="Something to read" readonly="">
</div>
```

##### Input Read Only + Copy to Clipboard

<form>
	<div class="form-group">
		<label>Example</label>
		<div class="has-action-button">
			<input class="form-control" type="text" onfocus="this.select();" onmouseup="return false;" value="Click to copy to clipboard" readonly="">
			<button class="btn btn-sm btn-primary" type="button">
				<span class="icon-12-overlap"></span>
				<div class="btn-tooltip">Copy to clipboard</div>
			</button>
		</div>
	</div>
</form>

```htmlmixed
<div class="has-action-button">
	<input class="form-control" type="text" value="Click to copy to clipboard" readonly="">
	<button class="btn btn-sm btn-primary" type="button">
		<span class="icon-12-overlap"></span>
		<div class="btn-tooltip">Copy to clipboard</div>
	</button>
</div>
```

##### Input Read Only + Click to Show

<form>
	<div class="form-group">
		<label>Example</label>
		<div class="has-action-button">
			<input class="form-control" type="password" value="B76BABB1377E5CDC8364AF4355659" readonly="">
			<button class="btn btn-sm btn-primary" type="button">
				<span class="icon-12-eye"></span>
				<div class="btn-tooltip">Show</div>
			</button>
		</div>
	</div>
</form>

```htmlmixed
<div class="has-action-button">
	<input class="form-control" type="password" value="B76BABB1377E5CDC8364AF4355659" readonly="">
	<button class="btn btn-sm btn-primary" type="button">
		<span class="icon-12-eye"></span>
		<div class="btn-tooltip">Show</div>
	</button>
</div>
```

##### Input Read Only + Click to Hide

<form>
	<div class="form-group">
		<label>Example</label>
		<div class="has-action-button">
			<input class="form-control" type="text" value="B76BABB1377E5CDC8364AF4355659" readonly="">
			<button class="btn btn-sm btn-primary" type="button">
				<span class="icon-12-eye-off"></span>
				<div class="btn-tooltip">Hide</div>
			</button>
		</div>
	</div>
</form>

```htmlmixed
<div class="has-action-button">
	<input class="form-control" type="text" value="B76BABB1377E5CDC8364AF4355659" readonly="">
	<button class="btn btn-sm btn-primary" type="button">
		<span class="icon-12-eye-off"></span>
		<div class="btn-tooltip">Hide</div>
	</button>
</div>
```

##### Input Success

<form>
	<div class="form-group has-success">
		<label for="input-success">Success</label>
		<input id="input-success" class="form-control" type="text">
	</div>
</form>

```htmlmixed
<div class="form-group has-success">
	<label for="input-success">Success</label>
	<input id="input-success" class="form-control" type="text">
</div>
```

##### Input Warning

<form>
	<div class="form-group has-warning">
		<label for="input-warning">Warning</label>
		<input id="input-warning" class="form-control" type="text">
	</div>
</form>

```htmlmixed
<div class="form-group has-warning">
	<label for="input-warning">Warning</label>
	<input id="input-warning" class="form-control" type="text">
</div>
```

##### Input Error

<form>
	<div class="form-group has-error">
		<label for="input-error">Error</label>
		<input id="input-error" class="form-control" type="text">
	</div>
</form>

```htmlmixed
<div class="form-group has-error">
	<label for="input-error">Error</label>
	<input id="input-error" class="form-control" type="text">
</div>
```