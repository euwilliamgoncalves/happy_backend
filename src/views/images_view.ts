import Image from "../models/Image"
import path from 'path';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: path.join(__dirname, '..', '..', 'uploads', image.path),
    }
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  }
}