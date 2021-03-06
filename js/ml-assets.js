/* To add new resource entries, make a new dict-like entry at the top of the mlAssets array, like the one below:
{
    "Name": "Parris",
    "Description": "Parris, the automated infrastructure setup tool for machine learning algorithms.",
    "Link": "https://github.com/jgreenemi/Parris",
    "Keywords": "Python, AWS",
    "LastUpdatedDate": "2018/01/28",
},

Note:
- Add new entries to the top of the array, that way the newest entries show up at the top of the page.
- LastUpdatedDate does not get used in the engine, just helps to keep track of when entries were last changed.
- Keywords is a string, not a list. Commas are encouraged for readability but not required.
- Only link to the original repository or the resource's original website, not a blog post or other middle-man
  page, unless that post or article *is* the resource to be shared.
- Entries are displayed in the order they were added to the list. In the future I may introduce logic to do some other
  sorting (i.e. by LastUpdatedDate) but this will depend on what the community finds useful.
*/


var mlAssets = [
{
    "Name": "Machine Learning Glossary by Google",
    "Description": "This glossary defines general machine learning terms as well as terms specific to TensorFlow.",
    "Link": "https://developers.google.com/machine-learning/glossary/",
    "Keywords": "Glossary, Reading, Google, Tensorflow",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Colah's Blog - Theory related to Deep Learning",
    "Description": "Christopher Olah's blog, A Google Brain Research Scientist",
    "Link": "http://colah.github.io/",
    "Keywords": "Blog, Reading, Googlebrain, Theory, DNN, LSTM, RNN, CNN, Convnet",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "React Native Tensorflow",
    "Description": "A TensorFlow inference library for react native ",
    "Link": "https://github.com/reneweb/react-native-tensorflow",
    "Keywords": "React, Tensorflow",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Keras to Tensorflow",
    "Description": "General code to convert a trained keras model into an inference tensorflow model",
    "Link": "https://github.com/amir-abdi/keras_to_tensorflow",
    "Keywords": "Keras, Tensorflow, Conversion",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Reinforcement Learning Examples",
    "Description": "Minimal and Clean Reinforcement Learning Examples ",
    "Link": "https://github.com/rlcode/reinforcement-learning",
    "Keywords": "Keras, DeepRL, RL, Examples",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Awesome Math",
    "Description": "A curated list of awesome mathematics resources ",
    "Link": "https://github.com/rossant/awesome-math",
    "Keywords": "Math, Awesome, List",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Skorch",
    "Description": "A scikit-learn compatible neural network library that wraps pytorch ",
    "Link": "https://github.com/dnouri/skorch",
    "Keywords": "Scikit-learn, Pytorch, Library",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Flashtext",
    "Description": "Extract Keywords from sentence or Replace keywords in sentences. A faster and easier library which replaces regular expressions for NLP purposes",
    "Link": "https://github.com/vi3k6i5/flashtext",
    "Keywords": "Flashtext, Re, Regularexpressions, NLP, Library",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Awesome Speech Recognition Speech Synthesis Papers",
    "Description": "Automatic Speech Recognition, Speaker Verification, Speech Synthesis, Language Modeling papers related to it",
    "Link": "https://github.com/zzw922cn/awesome-speech-recognition-speech-synthesis-papers",
    "Keywords": "Automatic-speech-recognition, Papers, Attention, Seq2seq, language-model, speaker-verification",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Gensim",
    "Description": "Topic Modelling for Humans - Text processing library",
    "Link": "https://github.com/RaRe-Technologies/gensim",
    "Keywords": "Topic-modelling, Information-retrieval, NLP, Word2vec, Text-Summarization, Document-similarity, Fasttext",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Deep NLP models in Pytorch for Stanford CS224n",
    "Description": "Pytorch implementations of various Deep NLP models in cs-224n(Stanford Univ) ",
    "Link": "https://github.com/DSKSD/DeepNLP-models-Pytorch",
    "Keywords": "Pytorch, NLP, DeepNLP, RNN, Stanford, CS224",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Awesome NLP",
    "Description": "A curated list of resources dedicated to Natural Language Processing (NLP) ",
    "Link": "https://github.com/keon/awesome-nlp",
    "Keywords": "Awesome, NLP, DeepNLP, Text-mining",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "CapsuleNet : TensorFLow version",
    "Description": "A Tensorflow implementation of CapsNet(Capsules Net) in Hinton's paper Dynamic Routing Between Capsules ",
    "Link": "https://github.com/naturomics/CapsNet-Tensorflow",
    "Keywords": "Capsule, Capsnet, Hinton, Routing, Tensorflow",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "CapsuleNet : Pytorch version",
    "Description": "A PyTorch implementation of the NIPS 2017 paper Dynamic Routing Between Capsules",
    "Link": "https://github.com/gram-ai/capsule-networks",
    "Keywords": "Capsule, Capsnet, Hinton, Routing, Pytorch",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "CapsuleNet : Keras version",
    "Description": "A Keras implementation of CapsNet in NIPS2017 paper Dynamic Routing Between Capsules. Now test error ＝ 0.34%. ",
    "Link": "https://github.com/XifengGuo/CapsNet-Keras",
    "Keywords": "Capsule, Capsnet, Hinton, Routing, Keras",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Keras Resources by François Chollet",
    "Description": "Directory of tutorials and open-source code repositories for working with Keras, the Python deep learning library ",
    "Link": "https://github.com/fchollet/keras-resources",
    "Keywords": "Keras, Resources",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Pytorch Tutorials",
    "Description": "PyTorch Tutorial for Deep Learning Researchers",
    "Link": "https://github.com/yunjey/pytorch-tutorial",
    "Keywords": "Pytorch, Resources",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Deep Reinforcement Learning paper implementations using Tensorflow",
    "Description": "TensorFlow implementation of Deep Reinforcement Learning papers ",
    "Link": "https://github.com/carpedm20/deep-rl-tensorflow",
    "Keywords": "Tensorflow, DeepRL, Papers, DQN",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Pytorch Examples",
    "Description": "Simple examples to introduce PyTorch ",
    "Link": "https://github.com/jcjohnson/pytorch-examples",
    "Keywords": "Pytorch, Examples",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Awesome ML for cybersecurity",
    "Description": "Machine Learning for Cyber Security ",
    "Link": "https://github.com/jivoi/awesome-ml-for-cybersecurity",
    "Keywords": "Cyber-security, Awesome, ML, Papers",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Introduction to Applied Linear Algebra – Vectors, Matrices, and Least Squares",
    "Description": "Book on Linear Algebra from Stephen Boyd and Lieven Vandenberghe",
    "Link": "https://web.stanford.edu/%7Eboyd/vmls/",
    "Keywords": "book, reading, math",
    "LastUpdatedDate": "2018/1/30",
},
{
    "Name": "cnn-text-classification-tf: Implementing a CNN for Text Classification in TensorFlow",
    "Description": "Convolutional Neural Network for Text Classification in Tensorflow by Denny Britz",
    "Link": "https://github.com/dennybritz/cnn-text-classification-tf",
    "Keywords": "library, examples, tf, cnn, reading, blog",
    "LastUpdatedDate": "2018/1/30",
},
{
    "Name": "deeplearning.ai",
    "Description": "Courses served via Coursera with a focus in deep learning, provided by noted machine learning professor Andrew Ng.",
    "Link": "https://www.deeplearning.ai/",
    "Keywords": "deep learning, neural networks, courses, classes, education, coursera",
    "LastUpdatedDate": "2018/1/30",
},
{
    "Name": "Various Machine Learning Books",
    "Description": "Important books for Machine Learning and DBMS and programming languages",
    "Link": "https://github.com/jonesgithub/book-1",
    "Keywords": "ML, Education, Blog, Reading, Bishop, Pattern Recognition, Kevin Murphy",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "Reinforcement Learning : An Introduction",
    "Description": "Authored by Sutton and Barto, second edition, still in draft",
    "Link": "http://incompleteideas.net/book/the-book-2nd.html",
    "Keywords": "RL, Education, Reading, Reinforcement Learning",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "Fast AI Part 1 v2",
    "Description": "YouTube playlist of the fastai course part 1 Practical Deep Learning using pytorch",
    "Link": "https://www.youtube.com/watch?v=IPBSB1HLNLo&list=PLgnu9apxPERz1GZe3R5LP2I0cYh_ZqjZa",
    "Keywords": "Fastai, Education, Reading, Deep Learning, Video, Pytorch",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "Deep Learning Book",
    "Description": "Authored by the Deep Learning giants like Ian Goodfellow, Yoshua Bengio etc",
    "Link": "http://www.deeplearningbook.org/",
    "Keywords": "Bible, Education, Reading, Deep Learning, Book",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "Deep Learning Book Accompanying Video Lectures",
    "Description": "YouTube playlist of the chapters belonging to Deep Learning Book",
    "Link": "https://www.youtube.com/playlist?list=PLnH7E0IG44jGzhQ9OS2XdBtuNLhaqJhJG",
    "Keywords": "Bible, Education, Reading, Deep Learning, Book, Video, Lectures",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "Oxford : Deep Natural Language Processing lectures",
    "Description": "2017 Oxford Deep NLP lectures: slides and videos.",
    "Link": "https://github.com/oxford-cs-deepnlp-2017/lectures",
    "Keywords": "Class, Education, Blog, Reading, NLP, DeepNLP",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "VisualData",
    "Description": "Computer Vision Datasets",
    "Link": "https://www.visualdata.io/",
    "Keywords": "CV, Computervision, Datasets",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "Deep Learning for Music",
    "Description": "List of articles related to deep learning applied to music ",
    "Link": "https://github.com/ybayle/awesome-deep-learning-music",
    "Keywords": "Awesome, Music, Informationretrieval, Audioprocessing, Audio",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "Uber Deep Neuroevolution",
    "Description": "Deep Neuroevolution algorithms",
    "Link": "https://github.com/uber-common/deep-neuroevolution",
    "Keywords": "Neuroevolution, Uber, Research",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "Neural Networks and Deep Learning",
    "Description": "Neural Networks and Deep Learning is a free online book. The book will teach you about:  Neural networks, a beautiful biologically-inspired programming paradigm which enables a computer to learn from observational data, and Deep learning, a powerful set of techniques for learning in neural networks",
    "Link": "http://neuralnetworksanddeeplearning.com/",
    "Keywords": "Neural Networks, Deep Learning",
    "LastUpdatedDate": "2018/1/29",
},
{
    "Name": "Roadmap to Machine Learning",
    "Description": "A complete, open source roadmap designed to take you from zero knowledge up to machine learning expertise. It includes resources such as ML and relevant math/programming courses, books and public datasets.",
    "Link": "https://howicodestuff.github.io/machine_learning/2018/01/12/a-roadmap-to-machine-learning.html",
    "Keywords": "Roadmap, Python, Blog, Education, Reading",
    "LastUpdatedDate": "2018/01/29",
},
{
    "Name": "Stanford CS109 Course Reader",
    "Description": "Probability for Computer Scientists From Counting to Deep Learning",
    "Link": "http://web.stanford.edu/class/cs109/courseReader.html",
    "Keywords": "Class, Education, Blog, Reading",
    "LastUpdatedDate": "2018/01/28",
},
{
    "Name": "MIT 6.S099: Artificial General Intelligence",
    "Description": "This class takes an engineering approach to exploring possible research paths toward building human-level intelligence. The lectures will introduce our current understanding of computational intelligence and ways in which strong AI could possibly be achieved, with insights from deep learning, reinforcement learning, computational neuroscience, robotics, cognitive modeling, psychology, and more.",
    "Link": "https://agi.mit.edu/",
    "Keywords": "Class, Education, Reading",
    "LastUpdatedDate": "2018/01/28",
},
{
    "Name": "Conv Nets: A Modular Perspective",
    "Description": "This post is part of a series on convolutional neural networks and their generalizations.",
    "Link": "http://colah.github.io/posts/2014-07-Conv-Nets-Modular/",
    "Keywords": "Blog, CNN, Reading",
    "LastUpdatedDate": "2018/01/28",
},
{
    "Name": "evolution-strategies-starter",
    "Description": "This is a distributed implementation of the algorithm described in Evolution Strategies as a Scalable Alternative to Reinforcement Learning (Tim Salimans, Jonathan Ho, Xi Chen, Ilya Sutskever).",
    "Link": "https://github.com/openai/evolution-strategies-starter",
    "Keywords": "Python",
    "LastUpdatedDate": "2018/01/28",
},
{
    "Name": "Nvidia-docker",
    "Description": "Build and run Docker containers leveraging NVIDIA GPUs",
    "Link": "https://github.com/NVIDIA/nvidia-docker",
    "Keywords": "Makefile, Shell",
    "LastUpdatedDate": "2018/01/28",
},
{
    "Name": "Keras",
    "Description": "Deep Learning for humans http://keras.io/",
    "Link": "https://github.com/keras-team/keras",
    "Keywords": "Python, Library",
    "LastUpdatedDate": "2018/01/28",
},
{
    "Name": "NapkinML",
    "Description": "A tiny lib with pocket-sized implementations of machine learning models in NumPy.",
    "Link": "https://github.com/eriklindernoren/NapkinML",
    "Keywords": "Python",
    "LastUpdatedDate": "2018/01/28",
},
{
    "Name": "Parris",
    "Description": "Parris, the automated infrastructure setup tool for machine learning algorithms.",
    "Link": "https://github.com/jgreenemi/Parris",
    "Keywords": "Python, AWS",
    "LastUpdatedDate": "2018/01/28",
},
]
