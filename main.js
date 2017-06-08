let form = document.querySelector('form');

function addFormData(obj) {
  let newItem;
  let keys = Object.keys(obj);
  let vals = Object.values(obj);
  // Need Special handling for the select/options and the textarea
  if (obj.type === 'textarea') {
    newItem = document.createElement('textarea');
  } else if (obj.type === 'select') {
    newItem = document.createElement('select');
    let opts = obj.options;
    for (let i = 0; i < opts.length; i++) {
      let newOpt = document.createElement('option');
      newOpt.setAttribute('label', opts[i].label);
      newOpt.setAttribute('value', opts[i].value);
      newItem.appendChild(newOpt);
    }
  } else {
    newItem = document.createElement('input');
  }
  for (let i = 0; i < keys.length ; i++) {
    newItem.setAttribute(keys[i], vals[i]);
  }
  newItem.setAttribute('placeholder', obj.label);

  console.log(newItem);
  form.appendChild(newItem);

}

for (let i = 0; i < formData.length; i++) {
  addFormData(formData[i]);
}
