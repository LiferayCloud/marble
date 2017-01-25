---
description: "Develop description."
layout: "styleguide"
title: "Input Groups"
---

##### Addons

Input with preffix

<div class="form-group">
	<label>Example</label>
	<div class="input-group">
		<div class="input-group-addon">http://</div>
		<input type="text" class="input-group-addon-input form-control" placeholder="app-url">
	</div>
</div>

```htmlmixed
<div class="input-group">
	<div class="input-group-addon">http://</div>
	<input type="text" class="input-group-addon-input form-control" placeholder="app-url">
</div>
```

Input with suffix

<div class="form-group">
	<label>Example</label>
	<div class="input-group">
		<input type="text" class="input-group-addon-input form-control" placeholder="app-url">
		<div class="input-group-addon">.appland.com</div>
	</div>
</div>

```htmlmixed
<div class="input-group">
	<input type="text" class="input-group-addon-input form-control" placeholder="app-url">
	<div class="input-group-addon">.appland.com</div>
</div>
```

Input with preffix and suffix

<div class="form-group">
	<label>Example</label>
	<div class="input-group">
		<div class="input-group-addon">http://</div>
		<input type="text" class="input-group-addon-input form-control" placeholder="app-url">
		<div class="input-group-addon">.appland.com</div>
	</div>
</div>

```htmlmixed
<div class="input-group">
	<div class="input-group-addon">http://</div>
	<input type="text" class="input-group-addon-input form-control" placeholder="app-url">
	<div class="input-group-addon">.appland.com</div>
</div>
``` 

##### Addons Disabled

Input with preffix

<div class="form-group">
	<label>Example</label>
	<div class="input-group">
		<div class="input-group-addon disabled">http://</div>
		<input type="text" class="input-group-addon-input form-control" placeholder="app-url" disabled="">
	</div>
</div>

```htmlmixed
<div class="input-group">
	<div class="input-group-addon disabled">http://</div>
	<input type="text" class="input-group-addon-input form-control" placeholder="app-url" disabled="">
</div>
```

Input with suffix

<div class="form-group">
	<label>Example</label>
	<div class="input-group">
		<input type="text" class="input-group-addon-input form-control" placeholder="app-url" disabled="">
		<div class="input-group-addon disabled">.appland.com</div>
	</div>
</div>

```htmlmixed
<div class="input-group">
	<input type="text" class="input-group-addon-input form-control" placeholder="app-url" disabled="">
	<div class="input-group-addon disabled">.appland.com</div>
</div>
```

Input with preffix and suffix

<div class="form-group">
	<label>Example</label>
	<div class="input-group">
		<div class="input-group-addon disabled">http://</div>
		<input type="text" class="input-group-addon-input form-control" placeholder="app-url" disabled="">
		<div class="input-group-addon disabled">.appland.com</div>
	</div>
</div>

```html
<div class="input-group">
	<div class="input-group-addon disabled">http://</div>
	<input type="text" class="input-group-addon-input form-control" placeholder="app-url" disabled="">
	<div class="input-group-addon disabled">.appland.com</div>
</div>
```

##### Addons With States

Input - Error

<div class="form-group has-error">
	<label>Example</label>
	<div class="input-group">
		<div class="input-group-addon">http://</div>
		<input type="text" class="input-group-addon-input form-control" placeholder="app-url">
	</div>
</div>

```htmlmixed
<div class="input-group">
	<div class="input-group-addon">http://</div>
	<input type="text" class="input-group-addon-input form-control" placeholder="app-url">
</div>
```

Input - Warning

<div class="form-group has-warning">
	<label>Example</label>
	<div class="input-group">
		<input type="text" class="input-group-addon-input form-control" placeholder="app-url">
		<div class="input-group-addon">.appland.com</div>
	</div>
</div>

```htmlmixed
<div class="input-group">
	<input type="text" class="input-group-addon-input form-control" placeholder="app-url">
	<div class="input-group-addon">.appland.com</div>
</div>
```

Input - Success

<div class="form-group has-success">
	<label>Example</label>
	<div class="input-group">
		<div class="input-group-addon">http://</div>
		<input type="text" class="input-group-addon-input form-control" placeholder="app-url">
		<div class="input-group-addon">.appland.com</div>
	</div>
</div>

```htmlmixed
<div class="input-group">
	<div class="input-group-addon">http://</div>
	<input type="text" class="input-group-addon-input form-control" placeholder="app-url">
	<div class="input-group-addon">.appland.com</div>
</div>
```

##### Inner Addons

Input - right icon 12 preffix

<div class="form-group">
	<label>Example</label>
	<div class="input-inner-addon input-inner-addon-left">
		<span class="input-inner-icon-helper icon-12-person"></span>
		<input class="form-control" type="text" placeholder="app-url">
	</div>
</div>

```htmlmixed
<div class="input-inner-addon input-inner-addon-left">
	<span class="input-inner-icon-helper icon-12-person"></span>
	<input class="form-control" type="text" placeholder="app-url">
</div>
```

Input - right icon 16 preffix

<div class="form-group">
	<label>Example</label>
	<div class="input-inner-addon input-inner-addon-left">
		<span class="input-inner-icon-helper icon-16-info"></span>
		<input class="form-control" type="text" placeholder="app-url">
	</div>
</div>

```htmlmixed
<div class="input-inner-addon input-inner-addon-left">
	<span class="input-inner-icon-helper icon-16-info"></span>
	<input class="form-control" type="text" placeholder="app-url">
</div>
```

Input - left icon 12 suffix

<div class="form-group">
	<label>Example</label>
	<div class="input-inner-addon input-inner-addon-right">
		<input class="form-control" type="text" placeholder="app-url">
		<span class="input-inner-icon-helper icon-12-person"></span>
	</div>
</div>

```htmlmixed
<div class="input-inner-addon input-inner-addon-right">
	<input class="form-control" type="text" placeholder="app-url">
	<span class="input-inner-icon-helper icon-12-person"></span>
</div>
```

Input - left icon 16 suffix

<div class="form-group">
	<label>Example</label>
	<div class="input-inner-addon input-inner-addon-right">
		<input class="form-control" type="text" placeholder="app-url">
		<span class="input-inner-icon-helper icon-16-info"></span>
	</div>
</div>

```htmlmixed
<div class="input-inner-addon input-inner-addon-right">
	<input class="form-control" type="text" placeholder="app-url">
	<span class="input-inner-icon-helper icon-16-info"></span>
</div>
```

##### Addons + Inner Addons

Preffix Addon and Icon on Right

<div class="form-group">
	<label>Example</label>
	<div class="input-group">
		<div class="input-group-addon">http://</div>
		<div class="input-inner-addon input-inner-addon-left">
			<span class="icon-12-person"></span>
			<input type="text" class="input-group-addon-input input-group-addon-input-right form-control" placeholder="app-url">
		</div>
	</div>
</div>

```htmlmixed
<div class="input-group">
	<div class="input-group-addon">http://</div>
	<div class="input-inner-addon input-inner-addon-left">
		<span class="icon-12-person"></span>
		<input type="text" class="input-group-addon-input input-group-addon-input-right form-control" placeholder="app-url">
	</div>
</div>
```

Suffix Addon and Icon on Right

<div class="form-group">
	<label>Example</label>
	<div class="input-group">
		<div class="input-inner-addon input-inner-addon-left">
			<span class="icon-16-info"></span>
			<input type="text" class="input-group-addon-input input-group-addon-input-left form-control" placeholder="app-url">
		</div>
		<div class="input-group-addon">.appland.com</div>
	</div>
</div>

```htmlmixed
<div class="input-group">
	<div class="input-inner-addon input-inner-addon-left">
		<span class="icon-16-info"></span>
		<input type="text" class="input-group-addon-input input-group-addon-input-left form-control" placeholder="app-url">
	</div>
	<div class="input-group-addon">.appland.com</div>
</div>
```

Preffix and Suffix Addons and Icon on Right

<div class="form-group">
	<label>Example</label>
	<div class="input-group">
		<div class="input-group-addon">http://</div>
		<div class="input-inner-addon input-inner-addon-left">
			<span class="icon-16-info"></span>
			<input type="text" class="input-group-addon-input input-group-addon-input-center form-control" placeholder="app-url">
		</div>
		<div class="input-group-addon">.appland.com</div>
	</div>
</div>

```htmlmixed
<div class="input-group">
	<div class="input-group-addon">http://</div>
	<div class="input-inner-addon input-inner-addon-left">
		<span class="icon-16-info"></span>
		<input type="text" class="input-group-addon-input input-group-addon-input-center form-control" placeholder="app-url">
	</div>
	<div class="input-group-addon">.appland.com</div>
</div>
```

##### Buttons Addons

Input - Preffix Button

<div class="form-group">
	<label>Example</label>
	<div class="input-group">
		<span class="input-group-btn">
			<button class="btn btn-sm btn-accent" type="button">Send Invite</button>
		</span>
		<input class="form-control" type="text" placeholder="Invite people to this app">
	</div>
</div>

```htmlmixed
<div class="input-group">
	<span class="input-group-btn">
		<button class="btn btn-sm btn-accent" type="button">Send Invite</button>
	</span>
	<input class="form-control" type="text" placeholder="Invite people to this app">
</div>
```

Input - Suffix Button

<div class="form-group">
	<label>Example</label>
	<div class="input-group">
		<input class="input-btn-right form-control" type="text" placeholder="Invite people to this app">
		<span class="input-group-btn">
			<button class="btn btn-sm btn-accent" type="button">Send Invite</button>
		</span>
	</div>
</div>

```htmlmixed
<div class="input-group">
	<input class="input-btn-right form-control" type="text" placeholder="Invite people to this app">
	<span class="input-group-btn">
		<button class="btn btn-sm btn-accent" type="button">Send Invite</button>
	</span>
</div>
```

##### Buttons Addons + Inner Addon

Input with button and icon-12 suffix

<div class="form-group">
	<label>Example</label>
	<div class="input-group">
		<span class="input-group-btn">
			<button class="btn btn-sm btn-accent" type="button">Send Invite</button>
		</span>
		<div class="input-inner-addon input-inner-addon-left">
			<span class="icon-12-person"></span>
			<input class="input-btn-left form-control" type="text" placeholder="Invite people to this app">
		</div>
	</div>
</div>

```htmlmixed
<div class="input-group">
	<span class="input-group-btn">
		<button class="btn btn-sm btn-accent" type="button">Send Invite</button>
	</span>
	<div class="input-inner-addon input-inner-addon-left">
		<span class="icon-12-person"></span>
		<input class="input-btn-left form-control" type="text" placeholder="Invite people to this app">
	</div>
</div>
```

Input with button and icon-16 suffix

<div class="form-group">
	<label>Example</label>
	<div class="input-group">
		<span class="input-group-btn">
			<button class="btn btn-sm btn-accent" type="button">Send Invite</button>
		</span>
		<div class="input-inner-addon input-inner-addon-left">
			<span class="icon-16-info"></span>
			<input class="input-btn-left form-control" type="text" placeholder="Invite people to this app">
		</div>
	</div>
</div>

```htmlmixed
<div class="input-group">
	<span class="input-group-btn">
		<button class="btn btn-sm btn-accent" type="button">Send Invite</button>
	</span>
	<div class="input-inner-addon input-inner-addon-left">
		<span class="icon-16-info"></span>
		<input class="input-btn-left form-control" type="text" placeholder="Invite people to this app">
	</div>
</div>
```

Input with button and icon-12 suffix

<div class="form-group">
	<label>Example</label>
	<div class="input-group">
		<div class="input-inner-addon input-inner-addon-right">
			<span class="icon-12-person"></span>
			<input class="input-btn-right form-control" type="text" placeholder="Invite people to this app">
		</div>
		<span class="input-group-btn">
			<button class="btn btn-sm btn-accent" type="button">Send Invite</button>
		</span>
	</div>
</div>

```htmlmixed
<div class="input-group">
	<div class="input-inner-addon input-inner-addon-right">
		<span class="icon-12-person"></span>
		<input class="input-btn-right form-control" type="text" placeholder="Invite people to this app">
	</div>
	<span class="input-group-btn">
		<button class="btn btn-sm btn-accent" type="button">Send Invite</button>
	</span>
</div>
```

Input with button and icon-16 suffix

<div class="form-group">
	<label>Example</label>
	<div class="input-group">
		<div class="input-inner-addon input-inner-addon-right">
			<span class="icon-16-info"></span>
			<input class="input-btn-right form-control" type="text" placeholder="Invite people to this app">
		</div>
		<span class="input-group-btn">
			<button class="btn btn-sm btn-accent" type="button">Send Invite</button>
		</span>
	</div>
</div>

```htmlmixed
<div class="input-group">
	<div class="input-inner-addon input-inner-addon-right">
		<span class="icon-16-info"></span>
		<input class="input-btn-right form-control" type="text" placeholder="Invite people to this app">
	</div>
	<span class="input-group-btn">
		<button class="btn btn-sm btn-accent" type="button">Send Invite</button>
	</span>
</div>
```
