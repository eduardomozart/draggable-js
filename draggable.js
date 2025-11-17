function makeDraggable(el) {
    el.draggable = true;

    el.addEventListener("dragstart", () => {
        draggingEl = el;
        el.classList.add("dragging");
    });

    el.addEventListener("dragend", () => {
        draggingEl = null;
        el.classList.remove("dragging");
    });

    el.addEventListener("dragover", (e) => {
        if (el == null) {
            return;
        }

        e.preventDefault(); // habilita o drop

        const bounding = el.getBoundingClientRect();
        const offset = e.clientY - bounding.top;

        // Se passou da metade, mover para depois
        if (offset > bounding.height / 2) {
            el.after(draggingEl);
        } 
        // Caso contrário, mover antes
        else {
            el.before(draggingEl);
        }
    });
}