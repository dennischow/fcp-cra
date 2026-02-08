# Fat-Cow Production - Code Standards

## 🎯 Quick Reference

### **Naming Conventions**

```javascript
// Files & Folders
app-header.component.jsx
app-header.styles.scss
home-page.component.jsx

// Components
const AppHeader = () => { ... };
const ContactForm = () => { ... };

// State Variables
const [isLoading, setIsLoading] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);
const [loaderFeedback, setLoaderFeedback] = useState({});

// Constants
const BRAND_NAME = 'Fat-Cow Production';
const API_ENDPOINTS = { ... };

// CSS Classes (BEM)
.app-panel-contact
.app-panel-contact__loader
.app-panel-contact__button--submit
```

### **Import Order**

```jsx
// 1. React imports
import { Fragment, useState, useEffect } from "react";

// 2. Third-party libraries
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

// 3. Internal imports (use @ alias)
import api from "@/services/api";
import useUIStore from "@/store/ui";
import AppHeader from "@/components/shared/app-header/app-header.component";

// 4. Styles
import "./component-name.styles.scss";
```

### **Component Structure**

```jsx
import { Fragment, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ComponentName = () => {
    // 1. State hooks
    const [state, setState] = useState(initialValue);
    
    // 2. Handlers
    const handleSubmit = (values, formikBag) => {
        // Handler logic
    };
    
    // 3. Formik configuration
    const formikObj = useFormik({
        initialValues: { ... },
        validationSchema: Yup.object().shape({ ... }),
        onSubmit: handleSubmit,
    });
    
    // 4. Return JSX
    return (
        <Fragment>
            {/* JSX content */}
        </Fragment>
    );
};

export default ComponentName;
```

### **Form Handling**

```jsx
// Always use Formik + Yup
const formikObj = useFormik({
    initialValues: {
        name: "",
        email: "",
        message: "",
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("This field is required."),
        email: Yup.string().email("Invalid email").required("Required"),
        message: Yup.string().required("Required"),
    }),
    onSubmit: async (values, formikBag) => {
        try {
            const response = await api.post.contact(values);
            // Handle success
        } catch (error) {
            // Handle error
        }
    },
});
```

### **API Services**

```javascript
// src/services/api.js
import axios from "axios";

const api = {
    get: {
        projects: () => axios.get(ENDPOINTS.projects),
        articles: () => axios.get(ENDPOINTS.articles),
    },
    post: {
        contact: (data) => axios.post(ENDPOINTS.contact, data),
    },
};

export default api;
```

### **State Management**

```javascript
// Use Zustand for global state
import { create } from 'zustand';

const useUIStore = create((set) => ({
    isPanelContactShow: false,
    setIsPanelContactShow: (show) => set({ isPanelContactShow: show }),
}));

export default useUIStore;
```

### **CSS/SCSS**

```scss
// BEM Methodology
.app-panel-contact {
    &__loader {
        display: none;
        
        &--visible {
            display: block;
        }
    }
    
    &__button {
        &--submit {
            background-color: $primary-color;
        }
        
        &--reset {
            background-color: $secondary-color;
        }
    }
}
```

## 🚀 Best Practices

### **✅ Do's**
- ✅ Use `is` prefix for boolean states
- ✅ Use absolute imports with `@` alias
- ✅ Use Formik for all forms
- ✅ Use Yup for validation
- ✅ Use Zustand for global state
- ✅ Use BEM for CSS classes
- ✅ Use try/catch for API calls
- ✅ Use semantic HTML5 elements
- ✅ Use Fragment instead of unnecessary divs

### **❌ Don'ts**
- ❌ Don't use inline styles
- ❌ Don't use console.log in production
- ❌ Don't use relative imports with `../../../`
- ❌ Don't hardcode URLs or keys
- ❌ Don't use any for API calls without try/catch
- ❌ Don't use index.js as component name
- ❌ Don't mix different naming conventions

## 📋 File Structure

```
src/
├── components/
│   ├── shared/           # Global components
│   │   ├── app-header/
│   │   │   ├── app-header.component.jsx
│   │   │   └── app-header.styles.scss
│   │   └── app-panel-contact/
│   │       ├── app-panel-contact.component.jsx
│   │       └── app-panel-contact.styles.scss
│   └── form/             # Form components
├── pages/                 # Page components
│   ├── home/
│   ├── about/
│   ├── projects/
│   └── articles/
├── store/                 # Zustand stores
├── services/              # API services
├── common/                # Constants, helpers
└── assets/                # Images, fonts, SCSS
```

## 🎯 Quick Checklist

### **Before Commit**
- [ ] No console.log statements
- [ ] All imports are in correct order
- [ ] Components follow naming convention
- [ ] CSS classes follow BEM
- [ ] Forms use Formik + Yup
- [ ] API calls have error handling
- [ ] Boolean states use `is` prefix
- [ ] No hardcoded values

### **Code Review Points**
- [ ] Component structure is clean
- [ ] State management is appropriate
- [ ] Error handling is comprehensive
- [ ] Performance considerations made
- [ ] Security best practices followed
- [ ] Accessibility is considered

---

**Follow these standards for consistent, maintainable code!** 🚀
