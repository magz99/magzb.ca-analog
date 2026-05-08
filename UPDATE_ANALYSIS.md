# Update Analysis for magzb.ca-analog

## Summary of Outdated Dependencies

Based on the `npm outdated` results, I've identified several dependencies that need updating:

## Major Updates Required:
1. **@analogjs/* packages** - All Analog.js packages are at version 2.2.3 but latest is 2.5.0
2. **Angular packages** - All Angular packages are at version 21.1.5 but latest is 21.2.12
3. **@angular/cli** - Current 21.2.6, latest 21.2.10
4. **@angular/ssr** - Current 21.2.6, latest 21.2.10
5. **typescript** - Current 5.9.3, latest 6.0.3
6. **vite** - Current 7.3.1, latest 8.0.11
7. **tailwindcss** - Current 3.4.12, latest 4.2.4
8. **shiki** - Current 1.18.0, latest 4.0.2

## Minor Updates:
1. **@types/jest** - Current 29.5.13, latest 30.0.0
2. **autoprefixer** - Current 10.4.20, latest 10.5.0
3. **jsdom** - Current 22.1.0, latest 29.1.1
4. **marked** - Current 15.0.12, latest 18.0.3
5. **marked-gfm-heading-id** - Current 4.1.2, latest 4.1.4
6. **marked-highlight** - Current 2.2.2, latest 2.2.4
7. **marked-mangle** - Current 1.1.11, latest 1.1.13
8. **marked-shiki** - Current 1.1.1, latest 1.2.1
9. **postcss** - Current 8.5.6, latest 8.5.14
10. **vitest** - Current 4.0.18, latest 4.1.5
11. **zone.js** - Current 0.15.1, latest 0.16.2

## Update Strategy

### 1. Angular Framework Updates (Critical)
Since this is an Angular 21 project, we should update Angular packages together to maintain compatibility:
- Update all @angular/* packages to 21.2.12
- Update @angular/cli to 21.2.10
- Update @angular/ssr to 21.2.10

### 2. Analog.js Platform Updates (Critical)
Update all Analog.js packages to version 2.5.0:
- @analogjs/content
- @analogjs/platform
- @analogjs/router
- @analogjs/vite-plugin-angular
- @analogjs/vitest-angular

### 3. Tooling Updates
- Update vite to 8.0.11 (major version update)
- Update typescript to 6.0.3 (major version update)
- Update tailwindcss to 4.2.4 (major version update)
- Update shiki to 4.0.2 (major version update)

### 4. Other Dependencies
Update other minor dependencies for bug fixes and security improvements.

## Risk Assessment

### High Risk:
- Vite major version update (7.x to 8.x)
- TypeScript major version update (5.x to 6.x)
- Tailwind CSS major version update (3.x to 4.x)
- shiki major version update (1.x to 4.x)

### Medium Risk:
- Angular framework updates
- Analog.js platform updates

### Low Risk:
- Minor version updates to libraries

## Recommended Approach

1. **Create a backup branch** before starting updates
2. **Update Angular packages first** to maintain compatibility
3. **Update Analog.js packages** next
4. **Update tooling dependencies** (vite, typescript, tailwind, shiki)
5. **Test thoroughly** after each major update
6. **Run all tests** to ensure compatibility
7. **Verify build process** works correctly

## Testing Plan

1. Run `npm test` to ensure all unit tests pass
2. Run `npm run build` to verify build process
3. Run `npm start` to test development server
4. Check that all pages render correctly (blog, about, resume)
5. Verify content rendering works properly

## Notes

This project is using a modern stack but is somewhat outdated. The major updates will likely require careful testing due to breaking changes in some dependencies, especially the major version updates to Vite, TypeScript, Tailwind CSS, and shiki.