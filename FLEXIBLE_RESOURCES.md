# Flexible Resource System

## Overview
The resource system now supports flexible categories for each course. Not all courses need the same resource types - you can customize them based on what's available.

## How It Works

### 1. Data Structure
Each course has a `resources` array containing resource objects:

```typescript
resources: [
  { key: "notes", label: "Notes", url: "https://drive.google.com/..." },
  { key: "tutorials", label: "Tutorials", url: "https://drive.google.com/..." },
  { key: "icas", label: "ICAs", url: "#" },
  { key: "pastpapers", label: "Past Papers", url: "https://drive.google.com/..." },
]
```

### 2. Common Resource Types
- **notes**: Lecture notes and study materials
- **tutorials**: Tutorial sheets and solutions
- **icas**: In-Course Assessments
- **pastpapers**: Past examination papers

### 3. Custom Resource Types
You can add any custom resource type! Examples:
- **graphics**: Graphics/design files
- **laravel**: Laravel project files
- **projects**: Project examples
- **datasets**: Data sets for assignments
- **videos**: Video recordings

### 4. Icons
The system automatically maps common resource types to icons:
- `notes` → Book icon
- `tutorials` → Graduation cap icon
- `icas` → File check icon
- `pastpapers` → File text icon
- **Custom types** → Default to book icon (you can extend the icon mapping)

## Adding Resources

### For Standard Courses
```typescript
{
  code: "CSC101",
  name: "Introduction to Programming",
  resources: [
    { key: "notes", label: "Notes", url: "https://drive.google.com/folders/..." },
    { key: "tutorials", label: "Tutorials", url: "https://drive.google.com/folders/..." },
    { key: "icas", label: "ICAs", url: "#" },
    { key: "pastpapers", label: "Past Papers", url: "https://drive.google.com/folders/..." },
  ],
}
```

### For Courses with Custom Resources
```typescript
{
  code: "CS303",
  name: "Computer Graphics",
  resources: [
    { key: "notes", label: "Notes", url: "#" },
    { key: "graphics", label: "Graphics", url: "https://drive.google.com/folders/..." },
    { key: "laravel", label: "Laravel", url: "https://drive.google.com/folders/..." },
    { key: "pastpapers", label: "Past Papers", url: "#" },
  ],
}
```

### For Courses with Only Some Resources
```typescript
{
  code: "MAT201",
  name: "Linear Algebra",
  resources: [
    { key: "notes", label: "Notes", url: "https://drive.google.com/folders/..." },
    { key: "pastpapers", label: "Past Papers", url: "https://drive.google.com/folders/..." },
  ],
}
```

## Marking Resources as "Coming Soon"
Use `"#"` or `""` for the URL to show "Coming Soon":

```typescript
resources: [
  { key: "notes", label: "Notes", url: "#" },  // Shows "Coming Soon"
  { key: "tutorials", label: "Tutorials", url: "" },  // Also shows "Coming Soon"
]
```

## Benefits
1. **Flexibility**: Each course can have different resource types
2. **Customization**: Add project-specific resources (graphics, code, datasets)
3. **Clean UI**: Only relevant resources appear for each course
4. **Easy Updates**: Add new resource types without changing code
5. **Backward Compatible**: Existing courses work without changes

## Example: Real-World Use Case

```typescript
// Course with standard resources
{
  code: "CSC102",
  name: "Programming Fundamentals",
  resources: [
    { key: "notes", label: "Notes", url: "..." },
    { key: "tutorials", label: "Tutorials", url: "..." },
    { key: "pastpapers", label: "Past Papers", url: "..." },
  ],
}

// Course with custom project files
{
  code: "CSC302",
  name: "Web Development",
  resources: [
    { key: "notes", label: "Notes", url: "..." },
    { key: "graphics", label: "Graphics", url: "..." },
    { key: "laravel", label: "Laravel Projects", url: "..." },
    { key: "demos", label: "Demo Sites", url: "..." },
  ],
}

// Course with only essential resources
{
  code: "MAT101",
  name: "Calculus",
  resources: [
    { key: "notes", label: "Notes", url: "..." },
    { key: "pastpapers", label: "Past Papers", url: "..." },
  ],
}
```

## Adding New Icon Mappings (Optional)

To add icons for custom resource types, edit `SubjectSemClient.tsx`:

```typescript
const getResourceIcon = (key: string): React.ElementType => {
    const iconMap: Record<string, React.ElementType> = {
        notes: BookOpen,
        tutorials: GraduationCap,
        icas: FileCheck,
        pastpapers: FileText,
        graphics: ImageIcon,      // Add custom icons here
        laravel: Code2,
        projects: FolderGit,
    };
    return iconMap[key.toLowerCase()] || BookOpen;
};
```
