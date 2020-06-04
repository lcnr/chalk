initSidebarItems({"mod":[["binder_impls","This module contains impls of `Visit` for those types that introduce binders."],["boring_impls","This module contains \"rote and uninteresting\" impls of `Visit` for various types. In general, we prefer to derive `Visit`, but sometimes that doesn't work for whatever reason."],["visitors",""]],"trait":[["SuperVisit","For types where \"visit\" invokes a callback on the `visitor`, the `SuperVisit` trait captures the recursive behavior that visits all the contents of the type."],["Visit","Applies the given `visitor` to a value, producing a visited result of type `Visitor::Result`."],["VisitResult","A \"result type\" that can be returned from a visitor. Visitors pick an appropriate result type depending on what sort of operation they are doing. A common choice is `FindAny`, which indicates that the visitor is searching for something and that the visitor should stop once it is found."],["Visitor","A \"visitor\" recursively folds some term -- that is, some bit of IR, such as a `Goal`, and computes a value as a result."]]});