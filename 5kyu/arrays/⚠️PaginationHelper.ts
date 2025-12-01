class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection
    this.itemsPerPage = itemsPerPage
  }

  itemCount() {
    // total number of items
    return this.collection.length
  }

  pageCount() {
    // total number of pages
    return Math.ceil(this.collection.length / this.itemsPerPage)
  }

  pageItemCount(pageIndex) {
    const totalItems = this.collection.length
    const perPage = this.itemsPerPage

    const totalPages = Math.ceil(totalItems / perPage)

    if (pageIndex < 0 || pageIndex >= totalPages) {
      return -1
    }

    if (pageIndex < totalPages - 1) {
      return perPage
    }

    const remainder = totalItems % perPage
    return remainder === 0 ? perPage : remainder
  }

  pageIndex(itemIndex) {
    const totalItems = this.collection.length
    const perPage = this.itemsPerPage

    if (itemIndex < 0 || itemIndex >= totalItems) {
      return -1
    }

    return Math.floor(itemIndex / perPage)
  }
}
