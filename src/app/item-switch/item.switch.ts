export abstract class ItemSwitch<T> {
    protected loadMoreItems: Function;

    public setLoadMoreItemsCallback(loadMoreItems?: Function) {
        this.loadMoreItems = loadMoreItems;
    }

    public showPreviousItem(items: T[]) {
        this.showItem(items, -1);
    }

    public showNextItem(items: T[]) {
        this.showItem(items, 1);
    }

    protected showItem(items: T[], modifier: number): void {
        let currentItemIndex = this.getCurrentItemIndex(items);
        if (currentItemIndex !== null) {
            let nextItemIndex = currentItemIndex + modifier;

            if (this.loadMoreItems && this.moreItemsNeeded(items, currentItemIndex,
                    nextItemIndex)) {
                this.loadMoreItems();
            }

            if (nextItemIndex > -1 && nextItemIndex < items.length) {
                this.switchToItem(items[nextItemIndex]);
            }
        }
    }

    protected abstract getCurrentItemIndex(items: T[]): number;

    protected abstract moreItemsNeeded(items: T[], currentItemIndex: number,
        nextItemIndex: number): boolean;

    protected abstract switchToItem(item: T): void;
}