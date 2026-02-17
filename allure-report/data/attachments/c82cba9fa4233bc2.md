# Page snapshot

```yaml
- generic [ref=e4]:
  - link "Fork me on GitHub":
    - /url: https://github.com/tourdedave/the-internet
    - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
  - generic [ref=e6]:
    - generic [ref=e7]:
      - heading "Dynamic Controls" [level=4] [ref=e8]
      - paragraph [ref=e9]: This example demonstrates when elements (e.g., checkbox, input field, etc.) are changed asynchronously.
      - heading "Remove/add" [level=4] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e12]:
          - checkbox [ref=e13]
          - text: A checkbox
        - button "Remove" [disabled] [ref=e14]
        - generic [ref=e15]:
          - text: Wait for it...
          - img [ref=e16]
      - separator [ref=e17]
      - heading "Enable/disable" [level=4] [ref=e18]
      - generic [ref=e19]:
        - textbox [disabled] [ref=e20]
        - button "Enable" [ref=e21] [cursor=pointer]
    - generic [ref=e23]:
      - separator [ref=e24]
      - generic [ref=e25]:
        - text: Powered by
        - link "Elemental Selenium" [ref=e26] [cursor=pointer]:
          - /url: http://elementalselenium.com/
```